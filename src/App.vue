<template>
  <div id="app">
    <div :id="pageStyle" ref="page" class="page" @click="insert">
      <!--标题-->
      <div id="title" class="title">{{title}}</div>
      <!--作者标记-->
      <div id="hied" class="hied"/>
      <!--正文-->
      <div class="note-cursor" id="input">
        <div v-for="(noteList,index_x) in music" :key="index_x">
          <note v-for="(item,index_y) in noteList"
                :key="item"
                :Tone="item"
                :ref="'note'+index_x+'_'+index_y"
                tabindex="-1"
                @focus.stop="moveCursor(index_x,index_y)"
                @mousedown.stop.prevent="clickLift($event,index_x,index_y)"
                @keydown.stop="keydownFun($event,index_x,index_y)"
                @keyup.stop="keyupFun($event,index_x,index_y)"
          />
        </div>
      </div>
    </div>
    <rightbox @print="handlePrintQRCode" @dowload="dowloadFun"/>
  </div>
</template>

<script>
import rightbox from  './components/rightbox'
import note from './components/note'
import music_source from "@/music_source";
import htmlToPdf from "./htmlToPdf";
export default {
  name: 'App',
  components: {
    rightbox,
    note,
  },
  mixins:[
    music_source
  ],
  data(){
    return{
      // 题目
      title:'',
      // 标识当前获取焦点的音符坐标
      focus:{x:null,y:null},
      // 后依音编辑状态
      editAfter:false,
      // 前依音编辑状态
      editFront:false,
      // 打印区域的样式
      pageStyle:'page'
    }
  },
  computed:{
    music:{
      get(){
        // 提供给下一个音符判断自己是否在连音线下
        let lastLigature=false
        let arr_x=this.music_source.map((item_x,index_x)=>{

          let arr=item_x.map((item_y,index_y)=>{
            if(item_y.Ligature=='Ligature_1'){lastLigature=true}
            else if(item_y.Ligature=='Ligature_3' && lastLigature==true){lastLigature=false}
            else if(lastLigature){item_y.Ligature='Ligature_2'}
            else { item_y.Ligature=null }
            // 给每个音符加上id
            item_y.id=JSON.stringify({...item_y,x:index_x,y:index_y})
            return item_y
          })

          // 给每一行加上id
          item_x.id==JSON.stringify(arr)

          // 在每一行头部加上行首的光标容器对象
          if(item_x.length==0 || item_x[0].note!='note_100'){
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
    //点击下载按钮触发
    async dowloadFun(){
      // 生成页面元素对应的数组
      let elememtImgArr=[]
      elememtImgArr.push(await htmlToPdf.getElementImg('page'))
      //根据数组生成pdf文件
      let PDF=htmlToPdf.getPdf(elememtImgArr)
      // 保存PDF文件
      PDF.save(this.title + '.pdf')
    },
    // 点击打印按钮触发
    handlePrintQRCode() {
      this.$nextTick(() => {
        let iframe = document.createElement("iframe");
        iframe.style.display = "none";
        document.body.appendChild(iframe);
        const stylesheets = Array.from(document.querySelectorAll("link[rel='stylesheet'], style"));
        stylesheets.forEach((stylesheet) => {
          const clonedStylesheet = stylesheet.cloneNode(true);
          iframe.contentWindow.document.head.appendChild(clonedStylesheet);
        });

        iframe.contentWindow.document.body.innerHTML = this.$refs.page.innerHTML;
        iframe.contentWindow.print();
        document.body.removeChild(iframe);
      });

    },
    // 鼠标左键按下
    clickLift(e,x,y){
      let maxlift=parseInt(document.documentElement.clientWidth/304.7)
      if (y!=0 && e.offsetX<maxlift){
        this.$nextTick(()=>{this.$refs['note'+x+'_'+(y-1)][0].$el.focus()})
      }
      else {
        this.$nextTick(()=>{this.$refs['note'+x+'_'+(y)][0].$el.focus()})
      }

    },
    // 修改光标位置(获取焦点的元素坐标)
    moveCursor(x,y){
      // 遍历清空上一个获取焦点的音符光标
      this.music=this.music.map(item_x=>{
        return item_x.map(item_y=>{
          item_y.showCursor=false
          return item_y
        })
      })
      // 配置新音符
      this.focus={x,y}
      this.music[x][y].showCursor=true
    },
    // input 事件无法阻止默认行为，用键盘事件模拟

    keyupFun(e) {
      // 关闭依音编辑状态
      if (e.key == 'a') {
        this.editAfter=false
      } else if (e.key == 'f') {
        this.editFront=false
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
  width: 50vw;
  min-height: 70.71vw;
  margin-top:1vw;
  margin-bottom: 1vw;
  padding:1vw;
  box-sizing: border-box;
  box-shadow: 3px 3px 3px 3px rgba(0,0,0,0.5);
  display: flex;
  flex-direction:column;
}
/*#page:focus-visible{  outline: none;}*/
/*#pageprint{*/
/*  width: 100vw;*/
/*  min-height: 141.42vw;*/
/*  margin-top:2vw;*/
/*  margin-bottom: 2vw;*/
/*  padding:2vw;*/
/*  box-sizing: border-box;*/
/*  box-shadow: 6px 6px 6px 6px rgba(0,0,0,0.5);*/
/*  display: flex;*/
/*  flex-direction:column;*/
/*}*/


.title{
  height: 3vw;
  text-align: center;
  font-size: 2.5vw;
  font-family:cursive  ;
}
.title:focus-visible{  outline: none;}
.hied{
  height: 2vw;
  /*border:1px solid pink;*/
}
.note-cursor{
  width: 100%;
  flex:1 0 auto;
  /*border:1px solid greenyellow;*/
  display: inline-block;
}
.note-cursor:focus-visible{  outline: none;}

@media print {
  body{
    -webkit-print-color-adjust:exact;
    -moz-print-color-adjust:exact;
    -ms-print-color-adjust:exact;
    print-color-adjust:exact;
  }
  button{display:none;}

}

</style>
