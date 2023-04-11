<template>
      <div v-if="Tone.note=='note_100'" class="note_Cursor">
        <div v-if="showCursor==true" class="layout_right_Cursor"/>
      </div>
      <div v-else class="note">
        <div v-if="showCursor==true" class="layout_right_Cursor"/>
        <div v-for="(item,index) in noteSvgArr" :key="index">
          <!--{{item}}-->
          <div class="notebackground"   :class="item"/>
        </div>
      </div>
</template>

<script>
export default {
  name: 'ShowNote',
  // note:note_0-8 哆、唻、咪、发、嗖、拉、西，
  // 8延长一半(延长点)，9延长线，10小结分界线，100换行
  // height:-2,-1,0,1,2 高低音
  // length: 16.5,16, 8.5, 8, 4.5, 4 长短音
  // lianyinxian:0,1,2,3 连音符
  // showCursor:标识光标是否闪烁
  props: ["Tone"],
  data(){
    return{
      // 用于当作类名来区分音符
      number:"number",
      // 标识光标亮与暗
      showCursor:false,
      noteSvgArr:[]
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
        // 音符
        this.noteSvgArr.push(this.Tone.note)
        // 延长音
        if(this.Tone.delay){this.noteSvgArr.push('note_8')}
        // 连音线
        this.noteSvgArr.push(this.Tone.Ligature)
        // 下划线

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
  width:1.5VW;
}
/*换行光标容器*/
.note_Cursor{
  outline: none;
  display: inline-block;
  position: relative;
  height:3vw ;
  width:1px;
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
/*所有音符的统一样式*/
.notebackground{
  position: absolute;
  width: 100%;
  height:100%;
}
/*音符,8是延长音*/
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
/*下划线*/
.short_1{background:url("@/assets/notesvg/short_1.svg");}
.short_2{background:url("@/assets/notesvg/short_2.svg");}
/*高音标记*/
.treble_1{background:url("@/assets/notesvg/Treble_1.svg");}
.treble_2{background:url("@/assets/notesvg/Treble_2.svg");}


</style>
