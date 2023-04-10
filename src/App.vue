<template>
  <div id="app">
    <!--<leftbox/>-->
    <div id="page" class="page" @click="insert">
      <div id="title" class="title">{{title}}</div>
      <div id="hied" class="hied"/>
      <div class="note-cursor" id="input">
        <div v-for="(noteList,index_x) in music" :key="index_x">
          <note v-for="(item,index_y) in noteList"
                :key="item"
                :Tone="item"
                :ref="'note'+index_x+'_'+index_y"
                tabindex="-1"
                @focus.stop="moveCursor(index_x,index_y)"
                @keydown.stop="keydown1($event,index_x,index_y)"
          />
        </div>
      </div>
    </div>
    <rightbox/>
  </div>
</template>

<script>
import rightbox from  './components/rightbox'
import note from './components/note'
import {reactive} from "vue";

export default {
  name: 'App',
  components: {
    rightbox,
    note,
    // leftbox
  },
  data(){
    return{
      title:'',
      music_source:[
          [
            {  note:'note_6',  height:0,  length:8.5,Ligature:'Ligature_1'},
            {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
            {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
            {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
            {  note:'note_1',  height:0,  length:4,},
            {  note:'note_9',  height:0,  length:4,}
          ],
        [
          {  note:'note_3',  height:0,  length:8.5},
          {  note:'note_2',  height:0,  length:16},
          {  note:'note_1',  height:0,  length:8},
          {  note:'note_6',  height:-1,  length:8},
          {  note:'note_5',  height:-1,  length:4},
          {  note:'note_9',  height:0,  length:4,}
        ],
        [
          {  note:'note_5',  height:-1,  length:8.5,Ligature:'Ligature_1'},
          {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
          {  note:'note_5',  height:-1,  length:8.5,Ligature:'Ligature_1'},
          {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
          {  note:'note_1',  height:0,  length:8.5,Ligature:'Ligature_1'},
          {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
          {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
          {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
        ],
        [
          {  note:'note_6',  height:0,  length:8.5,Ligature:'Ligature_1'},
          {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
          {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
          {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
          {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
          {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
          {  note:'note_9',  height:0,  length:4},
        ]
      ]
    }
  },
  computed:{
    music:{
      get(){
        let arr_x=this.music_source.map((item_x,index_x)=>{
          let arr=item_x
          arr=arr.map((item_y,index_y)=>{
            let obj=item_y
            obj.x=index_x
            obj.y=index_y
            let str=JSON.stringify(obj)
            item_y.id=str
            return item_y
          })
          let str=JSON.stringify(arr)
          item_x.id==str
          // 在每一行头部加上光标位
          if(item_x.length==0 || item_x[0].note!='note_100'){
            console.log('在每一行头部加上光标位')
            item_x.unshift({note:'note_100',length:0})
          }
          return item_x
        })
        return arr_x
      },
      set(val){
        this.music_source=val.map(item_y=>{
          delete item_y.id
          item_y=item_y.map(item_x=>{
            delete item_x.id
            return item_x
          })
          return item_y
        })
      }
    }
  },
  mounted() {
    this.title="沧海一声笑"
    this.$nextTick(()=>{
    })
  },
  methods:{
    // 点击打印按钮触发
    insert(){
    },
    // 修改光标位置
    moveCursor(x,y){
      console.log(x,y)
      this.music=this.music.map(item_x=>{
        return item_x.map(item_y=>{
          item_y.showCursor=false
          return item_y
        })
      })
      this.music[x][y].showCursor=true
    },
    // input 事件无法阻止默认行为，用键盘事件模拟
    keydown1(e,x,y){
      // 数字键0-8
      if(/[0-8]/.test(e.key)){
        this.music[x].splice(y+1,0,{  note:`note_${parseInt(e.key)}`,height:0,length:4})
        this.$nextTick(()=>{this.$refs['note'+x+'_'+(y+1)][0].$el.focus()})
      }
      // 删除键
      if(e.key=='Backspace'){
        if(y!=0){
          this.music[x].splice(y,1)
          this.$nextTick(()=>{this.$refs['note'+x+'_'+(y-1)][0].$el.focus()})
        }else if(x!=0){
          const time_y=this.music[x-1].length-1
          const timeArr=[]
          timeArr.push(...this.music[x])
          timeArr.shift()
          this.music[x-1].push(...timeArr)
          this.music.splice(x,1)
          this.$nextTick(()=>{this.$refs['note'+(x-1)+'_'+time_y][0].$el.focus()})
        }
      }
      // 回车
      if(e.key=='Enter'){
        const timeArr=reactive([])
        this.music.splice(x+1,0,timeArr)
        this.music[x+1]=this.music[x].filter((item,index)=>index>y)
        this.music[x]=this.music[x].filter((item,index)=>index<=y)
        this.moveCursor(x+1,0)
        this.$nextTick(()=>{this.$refs['note'+(x+1)+'_'+0][0].$el.focus()})
      }
      // 上
      if(e.key=='ArrowUp'){
        if(x!=0){
          if(y<this.music[x-1].length){
            this.$nextTick(()=>{this.$refs['note'+(x-1)+'_'+(y)][0].$el.focus()})
          }else{
            const num=this.music[x-1].length-1
            this.$nextTick(()=>{this.$refs['note'+(x-1)+'_'+num][0].$el.focus()})
          }
        }
      }
      // 下
      if(e.key=='ArrowDown'){
        if(x<this.music.length-1){
          if(y<this.music[x+1].length){
            this.$nextTick(()=>{this.$refs['note'+(x+1)+'_'+(y)][0].$el.focus()})
          }else{
            const num=this.music[x+1].length-1
            this.$nextTick(()=>{this.$refs['note'+(x+1)+'_'+num][0].$el.focus()})
          }
        }
      }
      // 左
      if(e.key=='ArrowLeft'){
        if(y!=0){
          this.$nextTick(()=>{this.$refs['note'+x+'_'+(y-1)][0].$el.focus()})
        }else if(x!=0){
          this.$nextTick(()=>{this.$refs['note'+(x-1)+'_'+(this.music[x-1].length-1)][0].$el.focus()})
        }
      }
      // 右
      if(e.key=='ArrowRight'){
        if(y<this.music[x].length-1){
          this.$nextTick(()=>{this.$refs['note'+x+'_'+(y+1)][0].$el.focus()})
        }else if(x<this.music.length-1){
          this.$nextTick(()=>{this.$refs['note'+(x+1)+'_'+0][0].$el.focus()})
        }
      }
      // b
      if(e.key=='b' || e.key=='B'){
        console.log('您按下了b')
        if(this.music[x][y].lianyinxian){
          this.music[x][y].lianyinxian=1
        }else{
          Reflect.set(this.music[x][y],"lianyinxian",1)
        }
        console.log(this.music[x][y])
      }
      // e
      if(e.key=='e' || e.key=='E'){
        this.music[x][y].lianyinxian=3
      }

      if(e.key=='u' || e.key=='U'){
        console.log('您按下了：S+Backspace')
      }
      // S+下---d
      if(e.key=='d' || e.key=='D'){
        console.log('您按下了：S+Backspace')
      }
      // S+左--s
      if(e.key=='s' || e.key=='S'){
        console.log('您按下了：S+Backspace')
      }
      // S+右--l
      if(e.key=='l' || e.key=='L'){
        console.log('您按下了：S+Backspace')
      }
    }
  }
}
</script>

<style>
body{
  margin:0;
}
::-webkit-scrollbar {
   display: none; /* Chrome Safari */
}
#app {
  width: 100vw;
  /*margin:1vw;*/
  display: flex;
  flex-direction:row;
  justify-content:center;
}
#page{
  width: 50%;
  min-height: 70.71vw;
  margin-top:1vw;
  padding:1vw;
  box-sizing: border-box;
  box-shadow: 3px 3px 3px 3px rgba(0,0,0,0.5);
  display: flex;
  flex-direction:column;
}
#page:focus-visible{  outline: none;}

.title{
  height: 3vw;
  text-align: center;
  font-size: 2.5vw;
  font-family:cursive  ;
}
.title:focus-visible{  outline: none;}
.hied{
  border:1px solid pink;
}
.note-cursor{
  width: 100%;
  flex:1 0 auto;
  border:1px solid greenyellow;
  display: inline-block;
}
.note-cursor:focus-visible{  outline: none;}

</style>
