<template>
    <div v-if="Tone.note=='note_100'" class="note_Cursor">
      <div v-if="showCursor==true" class="layout_right_Cursor"/>
    </div>
    <div v-else class="note" :class="noteContainerClassFun()">
      <!--光标-->
      <div v-if="showCursor==true" class="layout_right_Cursor"/>
      <!--前依音-->
      <div v-for="(item,index) in noteFrontSvgArr" :key="index">
        <div class="frontBackground"   :class="item"/>
      </div>
      <!--音符-->
      <div v-for="(item,index) in noteSvgArr" :key="index">
        <div :class="noteClassFun()+' '+item"/>
      </div>
      <!--后依音-->
      <div v-for="(item,index) in noteAfterSvgArr" :key="index">
        <div class="afterBackground"   :class="item"/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ShowNote',
  // note:note_0-8 哆、唻、咪、发、嗖、拉、西，
  // 8延长一半(附点)，9延长线，10小结分界线，100换行
  // height:-2,-1,0,1,2 高低音
  // length: 16.5,16, 8.5, 8, 4.5, 4 长短音
  // lianyinxian:0,1,2,3 连音符
  // showCursor:标识光标是否闪烁
  props: ["Tone"],
  emits: ['insertFrontDecorateFun','insertAfterDecorateFun'],
  data(){
    return{
      // 用于当作类名来区分音符
      number:"number",
      // 标识光标亮与暗
      showCursor:false,
      // 前依音图组
      noteFrontSvgArr:[],
      // 音符本符
      noteSvgArr:[],
      // 后依音图组
      noteAfterSvgArr:[]
    }
  },
  watch:{
    // 光标
    "Tone.showCursor":{
      immediate:true,
      handler(val){
        if(val){
          this.beginShowCursor()
        }else{
          this.endShowCursor()
          this.showCursor=false
        }
      }
    },
    "Tone":{
      deep:true,
      immediate: true,
      handler(){
        this.noteSvgArr=[]
        this.noteFrontSvgArr=[]
        this.noteAfterSvgArr=[]
        // 音符,包括增时线(note_9)和小结分界线(note_10)
        this.noteSvgArr.push(this.Tone.note)
        // 附点
        if(this.Tone.delay){this.noteSvgArr.push('note_8')}
        // 连音线
        this.noteSvgArr.push(this.Tone.Ligature)
        // 下划线
        if(this.Tone.length>=8){this.noteSvgArr.push('short_1')}
        if(this.Tone.length>=16){this.noteSvgArr.push('short_2')}
        // 音阶
        if(this.Tone.height>=1){this.noteSvgArr.push('treble_1')}
        if(this.Tone.height==2){this.noteSvgArr.push('treble_2')}
        if(this.Tone.length==16){
          if(this.Tone.height<=-1){this.noteSvgArr.push('short_2_bass_1')}
          if(this.Tone.height==-2){this.noteSvgArr.push('short_2_bass_2')}
        }else if(this.Tone.length==8){
          if(this.Tone.height<=-1){this.noteSvgArr.push('short_1_bass_1')}
          if(this.Tone.height==-2){this.noteSvgArr.push('short_1_bass_2')}
        }else{
          if(this.Tone.height<=-1){this.noteSvgArr.push('bass_1')}
          if(this.Tone.height==-2){this.noteSvgArr.push('bass_2')}
        }
        // 前依音相关显示
        if(this.Tone.front && this.Tone.front!=0){
          this.noteSvgArr.push('connection_front')
          this.noteFrontSvgArr.push('decorate_narrow_note_'+this.Tone.front)
          this.noteFrontSvgArr.push('decorate_front_narrow')
          if(['Ligature_2','Ligature_3'].includes(this.Tone.Ligature)) this.noteFrontSvgArr.push('Ligature_decorate')
          if(this.Tone.length>=8) this.noteFrontSvgArr.push('short_1_decorate')
          if(this.Tone.length>=16) this.noteFrontSvgArr.push('short_2_decorate')
        }
        // 后依音相关显示
        if(this.Tone.after && this.Tone.after!=0){
          this.noteSvgArr.push('connection_after')
          this.noteAfterSvgArr.push('decorate_narrow_note_'+this.Tone.after)
          this.noteAfterSvgArr.push('decorate_after_narrow')
          if(['Ligature_1','Ligature_2'].includes(this.Tone.Ligature)) this.noteAfterSvgArr.push('Ligature_decorate')
          if(this.Tone.length>=8) this.noteAfterSvgArr.push('short_1_decorate')
          if(this.Tone.length>=16) this.noteAfterSvgArr.push('short_2_decorate')
        }
      }
    }
  },
  created() {
    this.number=this.number+this.Tone.number
  },
  unmounted() {
    this.endShowCursor()
  },
  methods:{
    // 本音符开始闪烁光标
    beginShowCursor()
    {
      this.showCursor=true
      this.CursorTime = setInterval(() => {
        this.showCursor = !this.showCursor
      }, 540)
    },
    // 本音符停止闪烁光标
    endShowCursor(){
      clearInterval(this.CursorTime)
    },
    // 音符容器类宽
    noteContainerClassFun(){
      if((this.Tone.front && this.Tone.front!=0)&&(this.Tone.after && this.Tone.after!=0)) return "note_w25"
      if((this.Tone.front && this.Tone.front!=0)||(this.Tone.after && this.Tone.after!=0)) return "note_w20"
      return "note_w15"
    },
    // 音符定位类
    noteClassFun(){
      if(this.Tone.front && this.Tone.front!=0)return 'notebackground_front'
      return 'notebackground'
    }
  }
}
</script>

<style scoped>
/*音符容器*/
.note{
  outline: none;
  display: inline-block;
  position: relative;
  height:3VW ;
}
.note_w15{
  width:1.5VW;
}
.note_w20{
  width:2VW;
}
.note_w25{
  width:2.5VW;
}
/*换行光标容器*/
.note_Cursor{
  outline: none;
  display: inline-block;
  position: relative;
  height:3vw ;
  width:1px;
}
/*前后依音容器*/
.decorate_Cursor{
  outline: none;
  display: inline-block;
  position: relative;
  height:3vw ;
  width:0.75vw;
}
/*光标，右浮动顶层*/
.layout_right_Cursor{
  height:100%;
  box-sizing: border-box;
  display: inline;
  border: 0;
  position: absolute;
  right: 0px;
  /*float:right;*/
  /*z-index: 999999999999;*/
  border-right: 1px solid black;
}
/*没有前依音的音符定位*/
.notebackground{
  position: absolute;
  width: 1.5vw;
  height:100%;
}
/*有前依音的音符定位*/
.notebackground_front{
  position: absolute;
  left: 0.5vw;
  width: 1.5vw;
  height:100%;
}
/*前依音统一样式*/
.frontBackground{
  position: absolute;
  width: 0.5vw;
  height:100%;
}
/*后依音统一定位*/
.afterBackground{
  position: absolute;
  right: 0;
  width: 0.5vw;
  height:100%;
}

/*音符,8是附点，9是增时线，10是小结分界线*/
.note_0{background:url("@/assets/notesvg/note_0.svg");}
.note_1{background:url("@/assets/notesvg/note_1.svg");}
.note_2{background:url("@/assets/notesvg/note_2.svg");}
.note_3{background:url("@/assets/notesvg/note_3.svg");}
.note_4{background:url("@/assets/notesvg/note_4.svg");}
.note_5{background:url("@/assets/notesvg/note_5.svg");}
.note_6{background:url("@/assets/notesvg/note_6.svg");}
.note_7{background:url("@/assets/notesvg/note_7.svg");}
.note_8{background:url("@/assets/notesvg/note_8.svg");}
.note_9{background:url("@/assets/notesvg/note_9.svg");}
.note_10{background:url("@/assets/notesvg/note_10.svg");}

/*低音标记*/
.bass_1{background:url("@/assets/notesvg/bass_1.svg");}
.bass_2{background:url("@/assets/notesvg/bass_2.svg");}
.short_1_bass_1{background:url("@/assets/notesvg/short_1_bass_1.svg");}
.short_1_bass_2{background:url("@/assets/notesvg/short_1_bass_2.svg");}
.short_2_bass_1{background:url("@/assets/notesvg/short_2_bass_1.svg");}
.short_2_bass_2{background:url("@/assets/notesvg/short_2_bass_2.svg");}
/*连音线*/
.Ligature_1{background: url("@/assets/notesvg/Ligature_1.svg");}
.Ligature_2{background: url("@/assets/notesvg/Ligature_2.svg");}
.Ligature_3{background: url("@/assets/notesvg/Ligature_3.svg");}
/*减时线*/
.short_1{background:url("@/assets/notesvg/short_1.svg");}
.short_2{background:url("@/assets/notesvg/short_2.svg");}
/*高音标记*/
.treble_1{background:url("@/assets/notesvg/Treble_1.svg");}
.treble_2{background:url("@/assets/notesvg/Treble_2.svg");}
/*前依音连接线*/
.connection_front{background:url("@/assets/notesvg/connection_front.svg")}
/*后依音连接线*/
.connection_after{background:url("@/assets/notesvg/connection_after.svg")}
/*前依音托*/
.decorate_front_narrow{background:url("@/assets/notesvg/decorate_front_narrow.svg")}
/*后依音托*/
.decorate_after_narrow{background:url("@/assets/notesvg/decorate_after_narrow.svg")}
/*依音连音线*/
.Ligature_decorate{background: url("@/assets/notesvg/Ligature_decorate.svg");}
/*依音减时线*/
.short_1_decorate{background: url("@/assets/notesvg/short_1_decorate.svg");}
.short_2_decorate{background: url("@/assets/notesvg/short_2_decorate.svg");}
/*依音音符*/
.decorate_narrow_note_1{background:url("@/assets/notesvg/decorate_narrow_note_1.svg")}
.decorate_narrow_note_2{background:url("@/assets/notesvg/decorate_narrow_note_2.svg")}
.decorate_narrow_note_3{background:url("@/assets/notesvg/decorate_narrow_note_3.svg")}
.decorate_narrow_note_4{background:url("@/assets/notesvg/decorate_narrow_note_4.svg")}
.decorate_narrow_note_5{background:url("@/assets/notesvg/decorate_narrow_note_5.svg")}
.decorate_narrow_note_6{background:url("@/assets/notesvg/decorate_narrow_note_6.svg")}
.decorate_narrow_note_7{background:url("@/assets/notesvg/decorate_narrow_note_7.svg")}
</style>

