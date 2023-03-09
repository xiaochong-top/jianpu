<template>
      <div :class="Tone.number==9?'node_Cursor':'node'" >
        <div class="layout">
          <div v-if="showCursor==true" class="layout_right_Cursor"/>
          <div class="layout_left">
            <div id="hade" class="hader">
              <div id="lianyinxian" :class="lianyinxian"/>
              <div id="height1" class="height" :class="Tone.height==2?'heightPoint':''"/>
              <div id="height2" class="height" :class="Tone.height>=1?'heightPoint':''"/>
            </div>
            <div id="bod" class="body">
              <div id="number1" :class="number"/>
              <div id="delay" :class="Math.floor(Tone.length)!=Tone.length ?'delayPont':''"/>
            </div>
            <div id="foote" class="footer">
              <div id="duanuyinxian1" :class="Tone.length>=8?'minLine':''"/>
              <div id="duanuyinxian2" :class="Tone.length>=16?'minLine':''"/>
              <div id="low1" class="height" :class="this.Tone.height<=-1?'heightPoint':''"/>
              <div id="low1" class="height" :class="this.Tone.height==-2?'heightPoint':''"/>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'ShowNote',
  // number:0-8 哆、唻、咪、发、嗖、拉、西，8是延长线，9是纯光标(用于行首)
  // height:-2,-1,0,1,2 高低音
  // length:16, 16.5, 8, 8.5, 4, 4.5 长短音
  // lianyinxian:0,1,2,3 连音符
  // showCursor:标识光标是否闪烁
  props: ["Tone"],
  data(){
    return{
      // 用于当作类名来区分音符
      number:"number",
      // 连音线
      lianyinxian:null,
      // 标识光标亮与暗
      showCursor:false
    }
  },
  watch:{
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
        if(this.Tone.lianyinxian==1){
          this.lianyinxian="lianyinxian-begin"
        }else if(this.Tone.lianyinxian==2){
          this.lianyinxian="lianyinxian"
        }else if(this.Tone.lianyinxian==3){
          this.lianyinxian="lianyinxian-end"
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
    }
  }
}
</script>

<style scoped>
.node{
  /*!*0*!*/
  /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAA/pJREFUeF7tnLGV6jAQRfm/FiDgUIE72ENCRAmuh/iXsBEJpgMq4BBg98KXjXbZxbKkeTNjC8NNVmcDzOWNZNmW9ed6vU5eib/278vQZ8JVVdnWT6bTqW31gqZwdTjsd7vz6XQ6Ho/2f11kWbZcbtbr1exD+QcwwrKUZbHNM/vpGFmWb4vSfp4wgsJ80Uc0vEWE5VV/kuWS1mzhslB0vZNthaRZwqVmsG1EpGHhnpJ9gF/emHC5HUD2C54zIDyo7Y28sN+FDlm4yO1BhwXuzzThBML9BlSmCCcS7h2ksuOFk9M1ACnHCqeoW0NWjhOW0G2uCIqivFEUW6FZC7GuY4S5Q5VvtiAwf6GFHCHMijdmasSWpoQcFObEa2ztpwThdRpCyCFhxhchjiesjhN/rIAw7gucIzkpRxt7hfEfnZjuFz3Uk08Y90WmQA2Muo409gjDBwfjbVA37hYexFffuPPJQ7X/DN1LdpNtVpwby9PVBjU+nkvb8mHFHxko3xpGxhFjR1fC5XmQfGsYGZ8uroc5v+gQPuz+2RaR5Zz/oGQ6X9oWlYiidgtXl5NtEcnXH7bFYbbQi9gtDBf0YmZbLDQjdgoPWtA1ihG7hOGCFgpYNWKXMFrQYgFrRuwQHj5gzYjdgxaGXMCciAM4hOGKToNATbeFU6hoTk0HaAs/ecChTizYhyW7sF4nbgnDFZ0M/k4sl7BoF9ZDsKSfg5ZwKmOW1jA9woT9w/S7pGFkz0pqvHzCz38aDjDChP0TgkdhtUl7KsglHL5hmATJlrTWYDLCPuxnhML+CcE7YfjCO3zTnwR8ERO4TH0njJ+IRc9L+CAdmNOPLuHQjZe2cBqdWO1xT1s4iZrWu4aRLGnBiLXGaKew2mOdPgjehnAIJ1DTcEWHl1y4Shoftj73Isb4GrHwvXGXMB6xUC9WG6INzkEL78UiRa1Y0B3C+NIwiaLWLOgOYU5Rs421F3naJYiP4Eu1mYsttRd5uhPmdGNexnC+MQNWgxVvob1u2Q1+1NhF+AoLxA3oKwBwR4r/jbuFWcZQyPgBCYfzCLOM6cqMo1GO5RPmvUlEK+zeOpBfmGkc+y5en6UUEOZ9l4bMv70M901L6vgYEmaHfKPZVeeXd/0OcZ7xf03iSBEhLBCyFnTdKOFUlRHdSOEUlTHdaOHUlFFdgnBKyujMtYYgbBAZsZng4TbQhE3MwzozbQ1UYcNgznxbAyBc03t/5u8cZgGFDezdN6IRk63BhRu0reU3emQKN0hMituI5npHQviGyMVAjeK2pQY54W/qnZRyqnu9F9PjBZUK2rsPV1VlLgRN43LZnc+3/zUs1uv5ZDKbzXrefvi9ofbYeTHhyeQ/6hrlpNpiJ5UAAAAASUVORK5CYII=");*/
  /*!*1*!*/
  /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAVNJREFUeF7t2dFxgzAQRVHXRUGqh2rUjIohCINDiO08Z1mQxL3f0gxndr/QbbhYgFvvTHDqQ/d3Ic7H9+kscOq7m1b94BSDis3VDc5bPEPUqgV/ONhHNYL/a52qC5zi5zu8qRZwMo11VfngHaa6rmDwNNQdqfdKBPtI54oC77y9TysBPDm9oUvngcfFPdD56DRwDPMXHBxgW4BfBvigANsC/DLAcl2ISf9pt60ycMbm21cAL9aptsFd6FfWqUbB+Z1gI51rDDxCf830Z22A78630KVqwfl1a1SKzO8qBNsCLAfYFmCnAMsBtgXYKcBygG0BdgqwHGBbgJ0CLAfYFmCnAMsBtgXYKcBygG0BdgqwHGBbgJ0CLAfYFmCnAMsBtgXYKcBygG0BdgqwHGBbgJ0CLAfYFmCnAMsBtgXYKcBygG0BdgqwHGBbR4GLCXDrXQw8DF/sStM14csTugAAAABJRU5ErkJggg==");*/
  /*!*2*!*/
  /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAANwSURBVHhe7Zw9duIwFEbJrMWkmMMKvIOEhoolOOWwgCmnS+MpwxKmoolZAV4BhyJiL4zsvDBzANtPep9+bHyb6CTBcPmebEkWPJxOp8k98Y1+3g1+Ej4ej9S6IEkSavkCL6zllHrfbA77/X5SliX9upU0TSez2XKxmE+fXL8FWhiAKoo8068aQ5rleaHo0GBkwgqpeU2aZnBvO2GlCpeiF0C1TYXrTOmFeAVlzRcOpvoP3bfF0izhCFzPSJPuFi7yWFzPpIKgGcIZPU1UWDv3dWhZrqYvW2ob0eOx9PrZRrnXkwcb5Z7PlsyVez89XP/63TATu40PYT0XcnhlK1evRiHT2boZs8uSHu9neVEoDT3+Av2HIgePY7KCDs4AJKwHfVqSHsGknoHQ44UYGAuF5RM4BRnI8Y2thetM6V+E6KTpoPawjW2Ega5fiJXZQ01T4dTV2otUmRuxgTBiNtqCsDNzI+Zeh/Xxdm8/XC4oJvOlxLg8KGq1wxGu3rydU9ma5HFGLadQ0jEgK2pmTcc0lvYSce8nD6YMR3j2yDrLjAkH5Pixp5ZDYhJWB9atxtuk36fUaiciYVnAzC4ckfDx/Y+HgOMRlvmyA45GWOibLZ6o1UUkwtvXlcSXXdAaGmIGRbrMw579ayIQFq9qmSxahheWL+IZ+YYWFq9lGZVzRUhhebim8WqCCSNsjePVhBGG2NroBhHG2FpUc41vYZStpa5fYdzNM6ti/sSbMCxaka4nYaCsfS0TzoUV9Oa3fMOlU2Fcp60RlfIXzoShZayB2GqcCKNlAZV8Bi4Ml0VFS0CF4bLIaAmYMF4WHC0BEQafjTUOPt1ByIXxndaZbIVMGB6tW9kKgTA6WveyFbbCYFtnu6GusBKG2jreDXWJhbB8pfGMZ9kKU2HcWcpPl73CTBgVbiDZCgNhVM91M4LiwhbG6IaVrWAKI2o5YB3/B0sYkG74aAmGsFw3GltNt7C0mmOy1XQJC3Ujs9W0CwurOT7dDmGZr3DF3BFtwqJyjjHdipZtS9vNmloWpMu5888MWNEsPEzf5u/i2b48PAuM66/X8cvs5+6NsR/vs7KvwAydvcI7STaUtHDrY8Q0CIv2akfNbWEvm/HD0HJZGia3hYdb0WPCg2cUHjqj8NAZhYfO3QmPX7c8dEbhoXNnwpPJX9Myyr1BVdj0AAAAAElFTkSuQmCC");*/
  /*!*3*!*/
  /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAABDJJREFUeF7tnD1W4zAQgM2eJUmRlxOIEwSaVBzBKeEQdDShJN22W9GsfQJ8gjwK5LtkR9aELCwmmh/ZEstXib/kfYyNZsaDzvb7ffE/EVm4bVtcvWcymeBqWPSE27a29uXx8Xm32xVN0+CnT2CMWSwW89Xqcroc5lcAwnysrTZlaQy+lhxTbjaVxVePAku489Sz/AgwjyNOEwbTyKJviaAdLGxjx7QfUypaBwtXJb79OECsdaRzEXaoRPoHvlgONNuL6fl938YeSE7CjuZG6JybMADO6xrXdDIUBrYXbOU8hQXKuQqD8i3rXs5XGO7lO0aQg6ulen12scV1L13tczVfzWZFMZ1O8bOFtbYofCG1DS2jgiir/cMS16H47fg0/YmH6TLe8JRAs/Qw5PxLIAyiFM/36NQhEGMaLGG1Igak8SXZUI2pwqqVi8NuZHGmXtSEv9Kd69PDUrcRM7l+koeZAoqPiijKxGs6iX14cnk1WHMhjcRjMlvgKjqJZFrL1VD3ccapJY9UhKdz5l1s5q8ZbBCpCNtnZo69mNG2ydwvaWqAUxFuX3a4IkINcCrC3CuaHOBEhOvHk6X2h5irS3KiixnXmLAzS3o1TKiWosFPpMm1sGNsYX6lxAkvMKawqOfBCi8wkrC0rcXVHV5YpYPH1x1C2AJVtQFNqaeHee8eEEzx1Ovz2/78KHiOhwTYPl3Lekzem8OwrSiQVekfZlI8OFmd/mH6wsrN0pSFfb9fuzGMlzaDaPew8BnO56QkHGEM7V8SjLCBCIN6JPfEtyX/KBbfUIVM9mGdPdiRyT7sZtLOztfSqTQHijMYMsJHjPASzyTCR5ob2fxhdsIOyfxhtGoJiVM0dTArJ39lx0a5Jj7A6AQMJPwWxbklsvIowohr4sm9icpjCncojGuRlEcXdkjHtSjGSQgDMmdCYy8VYUCiHG6ckLBIOdg4qUxLMMvTPFtcnSCt1FJgvHsJyzUTy6X5xqEhTq14YI8vhYY4y2pJwrfwVyc1YfZEXujEVmLC7AG1YNISbn//4gY4dEQtKeH67obdEAqdQTwh3Na1Qis4jPb+ljeP5wifQcScugeXzut1/T9D+O88wSVxgHBHXGtpB4DQAggV7ojzPFP6r1oAoeVBEkb0vBUaWg7FFs+nlxqIc827I180XAFCfweQCB85PMOu3BTax2/vvgDf4M4qwh9SghJeQEd4PGjhBVLLpWmYzU/q06WchRm6OQuXFWvqMlNhuHXJpx14chQGW/5IbW7CLsWVDRDjX+sektqWINGRJ3i5CKsVLxlc0l3qrjdTi+K9KOX3LGJUZyeFPZrJfgARB4gDhQ+AuPoozhE/ShpH9AB/TsudRfvbH0XLH8Z6PZ5psKNp9Q7j9ScNQxHYfeAOk+oWfzH3507hyVMjHT+sKJwH+RYPTL6FvzZF8QeLbhl/czS/OgAAAABJRU5ErkJggg==");*/
  /*!*4*!*/
  /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAnhJREFUeF7t3DFS40AQhWHDWeyE8gnkE2ASbkAmhZA4c+iMRAohIyXHOgGcgCKR72Km5C4hQBg9edTdas2fMMkW+9X0jFdmzdl+v5+MqXP6OprEdzjPFptnWrduvn59uKQ1mgNLto3p7wEVb+mP48mO9C7bPNKSK1Fwfn/3Rku2BMEC2+sSA++yG/7tdUmBJaa5TAYsM81lImCx7XUJgPNkKbW9Lnaw4DSXMYOl7uaveMGSh5fiBMseXooPLH14KS6w/OGleMBquDxgRVwWsIKruVbvYBVXc62ewdq4PYP1cXsFa+T2CNbJ7Q2sldsTGOHGaRrRkqUewAg3SldXtGTKN3iXLRDu0+2U1lz5BWP/iIzX7Fy/YJC77fzzsFPyBx4E1x84T2ZD4PoCYy+7glw/4AFxPYCh1yFx7slg8M0Mce6JYOym0sA9CQw+IKjgdgeDR1cLtysYfR9SDbcbGDy6UVqo4XYAo7Ms8UR0LBCMz/KrKi4IBmdZ09Gtag/GZ1nT0a1qC0Y3V9vRrWoFRjdX4dGtagFGLyqVR7fqXzA+yyqPbtVxsKVZpo6BrW1u2Z/gPAE3V+29/L1mcDnK4EWlfZapJjA6ysOYZeoXGL6nhrO5ZT/A8ObqftFtqA6G76lBzTJVfVDLjTK8uWnh4YedxcvNEvzGbqyK1YzWR5pOG47a4eNLXT8xpTo3f4Sr1fyyZLgAtl4AWy+ArRfA1gtg640OXHtaSu4/yhV374/Yu0muKIrnc1r/3cX16vby1/PS4RlCsKLDfx8e7K+1ECiArRfA1gtg6wWw9QLYegFsvQC2XgBbb3Tg8Mt4rRfA1gtg640MPJl8AtqJibKEu/VNAAAAAElFTkSuQmCC");*/
  /*!*5*!*/
  /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAA5ZJREFUeF7tnL1y4jAQgMk9i03B+AnEE5A0VGnTmTJprkuZ7hqnDF3aq2hiniA8AUOB/C6cLG8CXLBHqx97JfQ1iMwww8fKa620zs3hcBhdE7/g9Wq4OmHUlF4vpi9bGFMge/58m8FYGSGsCi8YfIgIeQnfDEG8hjvguw2MPCZGuJ1qTylh6RIjHDoI4SByVoxwO2HkrBjh4FEXDiNnXV+ElcvD6nWaPuFizJjj6sppeYiuDVnB4aOkiEmrDXTOysYJjEgRI9xCIOsshxFmkxRGtIhTuoVQclaMcAvB5CxnEaaas+KUbiGYnBUjfBl0ziJ7CccIB4+acDg5S3GLZ724uV3CWIm85L+bq5hzLl8vk6bpKEl6/XGajY9u+jj6ZyzPi6LkrveFyAifwnJ35krCZQ7fpF9E0Evr2pSFG2S44YtYgL6wRFhbklYRptKuZGWn26eFx+YpnS7W8EYbEO9i+Bl9hk472hEPl5bL2+lrBWM8Xq6lxdzWn9oQ6Q7ItVg2aKYwf6ulzdOD1swG8Q6I5axTNPKXvxGuWb6gg6xQHp7XhnCsn2VZ/TKZzMfjegDU5V7Dd1m4X612o+12u9kga2o1RJBxXQBNoLsQX10Ab8zgvCyK3G4ORCYvlYWHA4S5NW+c8UDCDZasUcaDCtfYkMYk68GFa4xvfAhjErel2Zvham67V747EbkPJ4/vJsqbXdfW6BlkFh7J43MvKzpCK63ZXN9YfU5TWlqmE1u35g4oCSd397rG6hcxJeFeICWcjGVF4pRAIqx+AB+n9JDod4Opn0eTEu7jORJKwvoBRvTQEBKuPv7qBhjRYUFH2MA3n6vvapERXv9BPiR0BNcUBnXxwJjUwzb3tHhZ2m86+InRjofVXUv5w1vuOfgfw80OpK+KcIMTbfMdPPRhi7IwYK2jiJcWduSx4RVghb9g+ub2NuE1ztK0hU+oe+iEvUhvbUcy9d9LechiR7RBI7wCC8LDoKfr7XEpK94f9VpSvRTW1/VRmOXlp7auf8LCFv8U/CleCeclN7MVeCMsZvLhbaY/lb/wQrjumzacyd+QFwZZ89AClIXl6tWmrAQWIJcZbKXlriTtFpbIuqYvcfmcgxvVBgXhb5omKzfqIqSuYnqO5n8frqo1/1itdiYddoyx7P5+Pr6bWb5KO9EU/kFVVcd2w/1+tdvJ0ZHJfC57FGVzYs8Po51iS9gbvFpa2iAKh81o9A/5YTEGvUc/BQAAAABJRU5ErkJggg==");*/
  /*!*6*!*/
  /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAABKpJREFUeF7tnD124jAQx509C6bgcQJzAkhDtUcw5abZG2y3DSnDEVKlCZxgOQGPAvsuWUnWI3zIaPSfkS2y+6v8yIf884xljSTz8PHxkf1L9C9c17U9umIwGNgjOboWrutN9X5427/udtl2u7WfeiiKIsvG4++j+fAxnzKvghKOT7VeLkt10lIURblcV5X970HEFVaikp5XlGvbEJ1YwtU6qqkFEP5m/1SOevO8mDzksxXxBu0aKy5DFTeDr+gzpdXt2qmrobeUrp8n+ewp0Rw+hy9cbxaT/D5kNUxhE9pUuycnHGFtez+hteDCm8X92SpAYRXc2coe3xeQ8J0G1xBeLUnfuaoQGI9H8/kwy/I8tx9mVVVl2UGVVfvdbtVaVann8MvUHlNpHsdkKqHhRVPv2H9KwVlwRR9pSeiGml5yWoFFFmbrFiVL9QzjHVd4XdrzhpCU5UAWZukWyyRkNURhTjYnZKugCTPCC9xmUaEI4+FNK7gGgjAc3gR1KcKob5K6fmE0nRPV9Qqjvql1VZ/cFgZ9kw2v4qYw6JtueBW36uH6/RUpA8t5aMXWKVbcARbflNNZ0x5hLL7F90f5NV1J2oWrPZLP42Havu1TPJvFAzBNp/qrwDmXsw0AMZb8L2ky+4poN3ClK/fSrOm3on5alst1lAK6TRgbULY/kJSnsrS/FkLw5JeHFmEswE5fo2p/AUd5y2i7haVGHNL7AASsJYXP7+BYmx6Y0m5h9h0MpggVxujGKczM6Mi2DcgUrcYpDNb85hQ6sW2A4uwSBs9Zt9+hriE8zOByqZv3zlcVV7PJc+tWTTdW/BR41q4fwjJbNML9sH36vbGHBL6AsE7sBVnZIVwfdvbofli9UY27ibAuABzbfdUwWy96SnTsq1/Uzsu2fYLoo4U2EBQpMGiPqJjCgQMDtjTJOJowNtzlPREpxnHuYWX75wcyWzN94Vzu3YFwH1vxE9gRxoJ7hNE+oeUIwuHj20vwxPa3LZ7SxfIne+FhOkeNCUltxU/h9Bz88BrgU/C2LxzhYnTcPMgiH4G3lTfEssJiCy2D4dgeSeMShi+v4EILeg7bfWWPWnAJw5dXKqEV0UIs3kunjlMYz2k5Yp2DUzhel9E/7pQGL6+3xwgAW5724xa+3xB7+82WTgsc3JHKFRLR5plahMGklstpNKO9I4E2YTCp6ZNpt0EDTBgJ2DH1NeD4XaR6gCtUf+vtwj0aR/S9JYwaMyc8GL6Ulm8Jw1UpL8hwLUy60jeF8bZxZXyCiZZZt4VxY1CZMZ9GvJM8wh2cwQn45aW35hPu5iwUFaedgITyC3OCrCm8G+lOX5/ECLiwBGFekBuaDYQXZ6W3XXJVDSH9BUmYG+S4hHWPNOGElUOfBlThRJXDH3504fSUw597ihBhBb/7EiM8uIZA4VTCjO+oDRZW9O3M2j+MCCt6c0Y30R4BhRWxNoC3I7AfniOs6U5aRFbDE9bwR8Ie1KhUxtXAFzbIvLpyifAbPAYhYYuJtoC4q9QQQlb4SFMHhak3r6NF8jzSwZfx6rcLP78tyn6oGI3mQ/udUl28c2jp/+uWO6ZtqeXL8l/4a5NlfwH/JMwMMjwBHgAAAABJRU5ErkJggg==");*/
  /*!*7*!*/
  /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAArJJREFUeF7tnDtOw0AURQ1rAQqUFYQVIBqqLMGUbICSBaQNHS0VDckKyAoQBclewptkCojiyL7v64lPg5FA4ujeefZYQ842m011SpznryfDyQk3V3rxcPP8la97x2jyOnu8yN/8h4QPM6/zT/SR8XSVNfYZ1nDpDMKlMwiXziBcOoNw6ZQpPJ7cHX6QLlS4fmrYOBAFCtfz2W2+PEDk7eFyucxXHaB90mdzvsRu0xSQ1XSc/8Qu1PP8601EFVbSDSsMvX1o3vX/IaQw9rKlRbxEQGFMt1W8RDhhbPG21Q0njOm2bPOWWMK6bd4SSRh8MdwhXiKOMNjmTvESUYSNdMMIm7R5Swhhs3iJAMKgLhIv4S8MthmKl/AWto2X8BVGddF4CVdhsM14vISjsEO8hJ+wR7yEl7BPvISPMKrLjZdwEUbbzI6XcBB2jJewF/aMl7AWhuMV8rUWRuOVqXPCVNg9XsJS2HdaZQyF/eucMBOOUOeElTAcr7CvlXCMOidMhOE6y/uaCIepc8LgUMvi/SVfdeTI4SMGWVyNSHVOaCe8/ngDjuIk6vsjh48YZHEl4OWrlK/20Ao1rnZoCuPLV89Xcw3jy1dnPGeyuDz48lXMVzFh+O6rm6/aadqovlrCYX2VhOP6qgwt/HakO6+2KCSM344M8lWodGxfeeHgvuLC0X2lhcP7CgszfKvRlYWvsPDqG/bV2u/vIyqMP2+Y+YoKM3zH15f5ShtBYY6vzcBKyAmvf/B/3DMaWAkxYc6ANlvAhJQwx9duARNSwowbkmWhxYQZA8u00FLCnIFlWmghYc4Cti20kDBnAdsWWka4R4UWEe5ToUWEOYU2D1hAmFNo+4AFhPsVMF+Y88jhEDBbmFVoh4DZwpxCewTMFe5dwEc+i6dQ+FO6ZwzCpTMIl01V/QKmMCSjOUrC6AAAAABJRU5ErkJggg==");*/
  /*!*延长音*!*/
  /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAALpJREFUeF7t27ERgzAQAEHsWqAYN0KJuBjoBTtQBwzJcpvoI2kuUCa9zvOcnuQ91scoWFewrmBdwbqCdQXrCtYVrCtYV7CuYF3BuoJ1BesK1hWsK1hXsK5g3eOCrz9MO47vvo/5TsvymecxX/EPvmZbx043W7dx4DXdYV3BuoJ1BesK1hWs6xuPrmBdwbqCdQXrCtYVrCtYV7CuYF3BuoJ1BesK1hWsK1hXsK5gXcG6gnUF6wrWPSx4mn6Se5ZtmfkZxAAAAABJRU5ErkJggg==");*/
  /*!*下滑线*!*/
  /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAKCAIAAACsZk5rAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAChJREFUSEtj/P//P8NIAkxQesSAUQ+PglEwCoYUGK2WhjsYYR5mYAAA0O4GB4zuHj4AAAAASUVORK5CYII=");*/
  /*!*点*!*/
  /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAXCAIAAAB1dKN5AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAOdJREFUSEu11csRgyAQgOFNalEOTCqgg9ysgnosxRPpIBVkPIi9GNisCmLwAf6nkJBvmElkb8MwQNY2xL5/aQ3QNU3Lq4oBlOWzKOjDPxlxJa2kELQjTMhaadoZFIoWo2/GE3KV9cXd2pioA9QVlaR9h1qik6jrY6dz8s1RPHe+MdckMQ30yJ+YCrrk3S777oNvZwnFDL1b82hhucQ5FAv2wEVCgpf06qrf+oL/Y9IzA1IRYptE08lzep4vnjloeKP5okmrvaq5d5eaLRAxw0YvytglHp8zOGbskMEV5xVjm4Mm9ywE+ALsZM5JdvK/qQAAAABJRU5ErkJggg==");*/
  /*!*连音线*!*/
  /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAASCAYAAADMgVnKAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAFBJREFUWEft1csJACAMBNFoJem/ST+QCnau8yDoeYi4zlOK7TmV6u6/gU44ay4K+YQhPxHIDYQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIFJ1AR60WSdAuCKgAAAAAElFTkSuQmCC");*/
  /*!*!*连音线起点*!*!*/
  /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAASCAIAAABD486dAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAHdJREFUWEftlkEKwCAMBE3//+c0UJFSPDY7gTgXPWbYuGjuPjpxzbMNdRM2s3n7lXLCSZ6LQsLZqg8lhLeqSYPxwh/b7HnglhbbBmTCb1vZGFjCiG3AfzzEK8YIb2tZA5ywvkEA4RUv0pf8GxZzhJNh9zlolvAYN1ffMA/qUQxOAAAAAElFTkSuQmCC");*/
  /*!*连音线终点*!*/
  /*background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAASCAIAAABD486dAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAHpJREFUWEftlkEKwDAIBLX//7MtNIQQcqw7gp2L58ka1SPCOnGN2gYf9WvKNk6W8KSaebrwSx3trKHlfnjKCtrpU3ozx53Tp/RmeExeiW4Pr6pgzro9vEqCOUsPD/wDP2CXFhWyWhgPGUh4OiMhYy1N8QtLALu6WcJmNxC4MAavoAtSAAAAAElFTkSuQmCC");*/
  outline: none;
  display: inline-block;
  font-size: 100%;
  height:100px ;
  width:40px;
}
.node_Cursor{
  outline: none;
  display: inline-block;
  font-size: 100%;
  height:100px ;
  width:1px;
}
.layout{
  height:100%;
}
.layout_left{
  height:100%;
  width: 40px;
  display: inline;
}
.layout_right_Cursor{
  height:100%;
  box-sizing: border-box;
  display: inline;
  border: 0;
  float:right;
  z-index: 999999999999;
  border-right: 1px solid black;
}
.hader{
  height: 25%;
}
.lianyinxian{
  height: 50%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAASCAYAAADMgVnKAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAFBJREFUWEft1csJACAMBNFoJem/ST+QCnau8yDoeYi4zlOK7TmV6u6/gU44ay4K+YQhPxHIDYQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIFJ1AR60WSdAuCKgAAAAAElFTkSuQmCC");
  background-size: calc(100%) calc(100%);
}
.lianyinxian-begin{
  height: 50%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAASCAIAAABD486dAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAHdJREFUWEftlkEKwCAMBE3//+c0UJFSPDY7gTgXPWbYuGjuPjpxzbMNdRM2s3n7lXLCSZ6LQsLZqg8lhLeqSYPxwh/b7HnglhbbBmTCb1vZGFjCiG3AfzzEK8YIb2tZA5ywvkEA4RUv0pf8GxZzhJNh9zlolvAYN1ffMA/qUQxOAAAAAElFTkSuQmCC");
  background-size: calc(100%) calc(100%);
}
.lianyinxian-end{
  height: 50%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAASCAIAAABD486dAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAHpJREFUWEftlkEKwDAIBLX//7MtNIQQcqw7gp2L58ka1SPCOnGN2gYf9WvKNk6W8KSaebrwSx3trKHlfnjKCtrpU3ozx53Tp/RmeExeiW4Pr6pgzro9vEqCOUsPD/wDP2CXFhWyWhgPGUh4OiMhYy1N8QtLALu6WcJmNxC4MAavoAtSAAAAAElFTkSuQmCC");
  background-size: calc(100%) calc(100%);
}
.body{
  height: 50%;
  position: relative;
  z-index: -1;
}
.number0{
  height: 100%;
  width: 100%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAA/pJREFUeF7tnLGV6jAQRfm/FiDgUIE72ENCRAmuh/iXsBEJpgMq4BBg98KXjXbZxbKkeTNjC8NNVmcDzOWNZNmW9ed6vU5eib/278vQZ8JVVdnWT6bTqW31gqZwdTjsd7vz6XQ6Ho/2f11kWbZcbtbr1exD+QcwwrKUZbHNM/vpGFmWb4vSfp4wgsJ80Uc0vEWE5VV/kuWS1mzhslB0vZNthaRZwqVmsG1EpGHhnpJ9gF/emHC5HUD2C54zIDyo7Y28sN+FDlm4yO1BhwXuzzThBML9BlSmCCcS7h2ksuOFk9M1ACnHCqeoW0NWjhOW0G2uCIqivFEUW6FZC7GuY4S5Q5VvtiAwf6GFHCHMijdmasSWpoQcFObEa2ztpwThdRpCyCFhxhchjiesjhN/rIAw7gucIzkpRxt7hfEfnZjuFz3Uk08Y90WmQA2Muo409gjDBwfjbVA37hYexFffuPPJQ7X/DN1LdpNtVpwby9PVBjU+nkvb8mHFHxko3xpGxhFjR1fC5XmQfGsYGZ8uroc5v+gQPuz+2RaR5Zz/oGQ6X9oWlYiidgtXl5NtEcnXH7bFYbbQi9gtDBf0YmZbLDQjdgoPWtA1ihG7hOGCFgpYNWKXMFrQYgFrRuwQHj5gzYjdgxaGXMCciAM4hOGKToNATbeFU6hoTk0HaAs/ecChTizYhyW7sF4nbgnDFZ0M/k4sl7BoF9ZDsKSfg5ZwKmOW1jA9woT9w/S7pGFkz0pqvHzCz38aDjDChP0TgkdhtUl7KsglHL5hmATJlrTWYDLCPuxnhML+CcE7YfjCO3zTnwR8ERO4TH0njJ+IRc9L+CAdmNOPLuHQjZe2cBqdWO1xT1s4iZrWu4aRLGnBiLXGaKew2mOdPgjehnAIJ1DTcEWHl1y4Shoftj73Isb4GrHwvXGXMB6xUC9WG6INzkEL78UiRa1Y0B3C+NIwiaLWLOgOYU5Rs421F3naJYiP4Eu1mYsttRd5uhPmdGNexnC+MQNWgxVvob1u2Q1+1NhF+AoLxA3oKwBwR4r/jbuFWcZQyPgBCYfzCLOM6cqMo1GO5RPmvUlEK+zeOpBfmGkc+y5en6UUEOZ9l4bMv70M901L6vgYEmaHfKPZVeeXd/0OcZ7xf03iSBEhLBCyFnTdKOFUlRHdSOEUlTHdaOHUlFFdgnBKyujMtYYgbBAZsZng4TbQhE3MwzozbQ1UYcNgznxbAyBc03t/5u8cZgGFDezdN6IRk63BhRu0reU3emQKN0hMituI5npHQviGyMVAjeK2pQY54W/qnZRyqnu9F9PjBZUK2rsPV1VlLgRN43LZnc+3/zUs1uv5ZDKbzXrefvi9ofbYeTHhyeQ/6hrlpNpiJ5UAAAAASUVORK5CYII=");
  background-size: calc(100%) calc(100%);
}
.number1{
  height: 100%;
  width: 100%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAVNJREFUeF7t2dFxgzAQRVHXRUGqh2rUjIohCINDiO08Z1mQxL3f0gxndr/QbbhYgFvvTHDqQ/d3Ic7H9+kscOq7m1b94BSDis3VDc5bPEPUqgV/ONhHNYL/a52qC5zi5zu8qRZwMo11VfngHaa6rmDwNNQdqfdKBPtI54oC77y9TysBPDm9oUvngcfFPdD56DRwDPMXHBxgW4BfBvigANsC/DLAcl2ISf9pt60ycMbm21cAL9aptsFd6FfWqUbB+Z1gI51rDDxCf830Z22A78630KVqwfl1a1SKzO8qBNsCLAfYFmCnAMsBtgXYKcBygG0BdgqwHGBbgJ0CLAfYFmCnAMsBtgXYKcBygG0BdgqwHGBbgJ0CLAfYFmCnAMsBtgXYKcBygG0BdgqwHGBbgJ0CLAfYFmCnAMsBtgXYKcBygG0BdgqwHGBbR4GLCXDrXQw8DF/sStM14csTugAAAABJRU5ErkJggg==");
  background-size: calc(100%) calc(100%);
}
.number2{
  height: 100%;
  width: 100%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAANwSURBVHhe7Zw9duIwFEbJrMWkmMMKvIOEhoolOOWwgCmnS+MpwxKmoolZAV4BhyJiL4zsvDBzANtPep9+bHyb6CTBcPmebEkWPJxOp8k98Y1+3g1+Ej4ej9S6IEkSavkCL6zllHrfbA77/X5SliX9upU0TSez2XKxmE+fXL8FWhiAKoo8068aQ5rleaHo0GBkwgqpeU2aZnBvO2GlCpeiF0C1TYXrTOmFeAVlzRcOpvoP3bfF0izhCFzPSJPuFi7yWFzPpIKgGcIZPU1UWDv3dWhZrqYvW2ob0eOx9PrZRrnXkwcb5Z7PlsyVez89XP/63TATu40PYT0XcnhlK1evRiHT2boZs8uSHu9neVEoDT3+Av2HIgePY7KCDs4AJKwHfVqSHsGknoHQ44UYGAuF5RM4BRnI8Y2thetM6V+E6KTpoPawjW2Ega5fiJXZQ01T4dTV2otUmRuxgTBiNtqCsDNzI+Zeh/Xxdm8/XC4oJvOlxLg8KGq1wxGu3rydU9ma5HFGLadQ0jEgK2pmTcc0lvYSce8nD6YMR3j2yDrLjAkH5Pixp5ZDYhJWB9atxtuk36fUaiciYVnAzC4ckfDx/Y+HgOMRlvmyA45GWOibLZ6o1UUkwtvXlcSXXdAaGmIGRbrMw579ayIQFq9qmSxahheWL+IZ+YYWFq9lGZVzRUhhebim8WqCCSNsjePVhBGG2NroBhHG2FpUc41vYZStpa5fYdzNM6ti/sSbMCxaka4nYaCsfS0TzoUV9Oa3fMOlU2Fcp60RlfIXzoShZayB2GqcCKNlAZV8Bi4Ml0VFS0CF4bLIaAmYMF4WHC0BEQafjTUOPt1ByIXxndaZbIVMGB6tW9kKgTA6WveyFbbCYFtnu6GusBKG2jreDXWJhbB8pfGMZ9kKU2HcWcpPl73CTBgVbiDZCgNhVM91M4LiwhbG6IaVrWAKI2o5YB3/B0sYkG74aAmGsFw3GltNt7C0mmOy1XQJC3Ujs9W0CwurOT7dDmGZr3DF3BFtwqJyjjHdipZtS9vNmloWpMu5888MWNEsPEzf5u/i2b48PAuM66/X8cvs5+6NsR/vs7KvwAydvcI7STaUtHDrY8Q0CIv2akfNbWEvm/HD0HJZGia3hYdb0WPCg2cUHjqj8NAZhYfO3QmPX7c8dEbhoXNnwpPJX9Myyr1BVdj0AAAAAElFTkSuQmCC");
  background-size: calc(100%) calc(100%);
}
.number3{
  height: 100%;
  width: 100%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAABDJJREFUeF7tnD1W4zAQgM2eJUmRlxOIEwSaVBzBKeEQdDShJN22W9GsfQJ8gjwK5LtkR9aELCwmmh/ZEstXib/kfYyNZsaDzvb7ffE/EVm4bVtcvWcymeBqWPSE27a29uXx8Xm32xVN0+CnT2CMWSwW89Xqcroc5lcAwnysrTZlaQy+lhxTbjaVxVePAku489Sz/AgwjyNOEwbTyKJviaAdLGxjx7QfUypaBwtXJb79OECsdaRzEXaoRPoHvlgONNuL6fl938YeSE7CjuZG6JybMADO6xrXdDIUBrYXbOU8hQXKuQqD8i3rXs5XGO7lO0aQg6ulen12scV1L13tczVfzWZFMZ1O8bOFtbYofCG1DS2jgiir/cMS16H47fg0/YmH6TLe8JRAs/Qw5PxLIAyiFM/36NQhEGMaLGG1Igak8SXZUI2pwqqVi8NuZHGmXtSEv9Kd69PDUrcRM7l+koeZAoqPiijKxGs6iX14cnk1WHMhjcRjMlvgKjqJZFrL1VD3ccapJY9UhKdz5l1s5q8ZbBCpCNtnZo69mNG2ydwvaWqAUxFuX3a4IkINcCrC3CuaHOBEhOvHk6X2h5irS3KiixnXmLAzS3o1TKiWosFPpMm1sGNsYX6lxAkvMKawqOfBCi8wkrC0rcXVHV5YpYPH1x1C2AJVtQFNqaeHee8eEEzx1Ovz2/78KHiOhwTYPl3Lekzem8OwrSiQVekfZlI8OFmd/mH6wsrN0pSFfb9fuzGMlzaDaPew8BnO56QkHGEM7V8SjLCBCIN6JPfEtyX/KBbfUIVM9mGdPdiRyT7sZtLOztfSqTQHijMYMsJHjPASzyTCR5ob2fxhdsIOyfxhtGoJiVM0dTArJ39lx0a5Jj7A6AQMJPwWxbklsvIowohr4sm9icpjCncojGuRlEcXdkjHtSjGSQgDMmdCYy8VYUCiHG6ckLBIOdg4qUxLMMvTPFtcnSCt1FJgvHsJyzUTy6X5xqEhTq14YI8vhYY4y2pJwrfwVyc1YfZEXujEVmLC7AG1YNISbn//4gY4dEQtKeH67obdEAqdQTwh3Na1Qis4jPb+ljeP5wifQcScugeXzut1/T9D+O88wSVxgHBHXGtpB4DQAggV7ojzPFP6r1oAoeVBEkb0vBUaWg7FFs+nlxqIc827I180XAFCfweQCB85PMOu3BTax2/vvgDf4M4qwh9SghJeQEd4PGjhBVLLpWmYzU/q06WchRm6OQuXFWvqMlNhuHXJpx14chQGW/5IbW7CLsWVDRDjX+sektqWINGRJ3i5CKsVLxlc0l3qrjdTi+K9KOX3LGJUZyeFPZrJfgARB4gDhQ+AuPoozhE/ShpH9AB/TsudRfvbH0XLH8Z6PZ5psKNp9Q7j9ScNQxHYfeAOk+oWfzH3507hyVMjHT+sKJwH+RYPTL6FvzZF8QeLbhl/czS/OgAAAABJRU5ErkJggg==");
  background-size: calc(100%) calc(100%);
}
.number4{
  height: 100%;
  width: 100%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAnhJREFUeF7t3DFS40AQhWHDWeyE8gnkE2ASbkAmhZA4c+iMRAohIyXHOgGcgCKR72Km5C4hQBg9edTdas2fMMkW+9X0jFdmzdl+v5+MqXP6OprEdzjPFptnWrduvn59uKQ1mgNLto3p7wEVb+mP48mO9C7bPNKSK1Fwfn/3Rku2BMEC2+sSA++yG/7tdUmBJaa5TAYsM81lImCx7XUJgPNkKbW9Lnaw4DSXMYOl7uaveMGSh5fiBMseXooPLH14KS6w/OGleMBquDxgRVwWsIKruVbvYBVXc62ewdq4PYP1cXsFa+T2CNbJ7Q2sldsTGOHGaRrRkqUewAg3SldXtGTKN3iXLRDu0+2U1lz5BWP/iIzX7Fy/YJC77fzzsFPyBx4E1x84T2ZD4PoCYy+7glw/4AFxPYCh1yFx7slg8M0Mce6JYOym0sA9CQw+IKjgdgeDR1cLtysYfR9SDbcbGDy6UVqo4XYAo7Ms8UR0LBCMz/KrKi4IBmdZ09Gtag/GZ1nT0a1qC0Y3V9vRrWoFRjdX4dGtagFGLyqVR7fqXzA+yyqPbtVxsKVZpo6BrW1u2Z/gPAE3V+29/L1mcDnK4EWlfZapJjA6ysOYZeoXGL6nhrO5ZT/A8ObqftFtqA6G76lBzTJVfVDLjTK8uWnh4YedxcvNEvzGbqyK1YzWR5pOG47a4eNLXT8xpTo3f4Sr1fyyZLgAtl4AWy+ArRfA1gtg640OXHtaSu4/yhV374/Yu0muKIrnc1r/3cX16vby1/PS4RlCsKLDfx8e7K+1ECiArRfA1gtg6wWw9QLYegFsvQC2XgBbb3Tg8Mt4rRfA1gtg640MPJl8AtqJibKEu/VNAAAAAElFTkSuQmCC");
  background-size: calc(100%) calc(100%);
}
.number5{
  height: 100%;
  width: 100%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAA5ZJREFUeF7tnL1y4jAQgMk9i03B+AnEE5A0VGnTmTJprkuZ7hqnDF3aq2hiniA8AUOB/C6cLG8CXLBHqx97JfQ1iMwww8fKa620zs3hcBhdE7/g9Wq4OmHUlF4vpi9bGFMge/58m8FYGSGsCi8YfIgIeQnfDEG8hjvguw2MPCZGuJ1qTylh6RIjHDoI4SByVoxwO2HkrBjh4FEXDiNnXV+ElcvD6nWaPuFizJjj6sppeYiuDVnB4aOkiEmrDXTOysYJjEgRI9xCIOsshxFmkxRGtIhTuoVQclaMcAvB5CxnEaaas+KUbiGYnBUjfBl0ziJ7CccIB4+acDg5S3GLZ724uV3CWIm85L+bq5hzLl8vk6bpKEl6/XGajY9u+jj6ZyzPi6LkrveFyAifwnJ35krCZQ7fpF9E0Evr2pSFG2S44YtYgL6wRFhbklYRptKuZGWn26eFx+YpnS7W8EYbEO9i+Bl9hk472hEPl5bL2+lrBWM8Xq6lxdzWn9oQ6Q7ItVg2aKYwf6ulzdOD1swG8Q6I5axTNPKXvxGuWb6gg6xQHp7XhnCsn2VZ/TKZzMfjegDU5V7Dd1m4X612o+12u9kga2o1RJBxXQBNoLsQX10Ab8zgvCyK3G4ORCYvlYWHA4S5NW+c8UDCDZasUcaDCtfYkMYk68GFa4xvfAhjErel2Zvham67V747EbkPJ4/vJsqbXdfW6BlkFh7J43MvKzpCK63ZXN9YfU5TWlqmE1u35g4oCSd397rG6hcxJeFeICWcjGVF4pRAIqx+AB+n9JDod4Opn0eTEu7jORJKwvoBRvTQEBKuPv7qBhjRYUFH2MA3n6vvapERXv9BPiR0BNcUBnXxwJjUwzb3tHhZ2m86+InRjofVXUv5w1vuOfgfw80OpK+KcIMTbfMdPPRhi7IwYK2jiJcWduSx4RVghb9g+ub2NuE1ztK0hU+oe+iEvUhvbUcy9d9LechiR7RBI7wCC8LDoKfr7XEpK94f9VpSvRTW1/VRmOXlp7auf8LCFv8U/CleCeclN7MVeCMsZvLhbaY/lb/wQrjumzacyd+QFwZZ89AClIXl6tWmrAQWIJcZbKXlriTtFpbIuqYvcfmcgxvVBgXhb5omKzfqIqSuYnqO5n8frqo1/1itdiYddoyx7P5+Pr6bWb5KO9EU/kFVVcd2w/1+tdvJ0ZHJfC57FGVzYs8Po51iS9gbvFpa2iAKh81o9A/5YTEGvUc/BQAAAABJRU5ErkJggg==");
  background-size: calc(100%) calc(100%);
}
.number6{
  height: 100%;
  width: 100%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAABKpJREFUeF7tnD124jAQx509C6bgcQJzAkhDtUcw5abZG2y3DSnDEVKlCZxgOQGPAvsuWUnWI3zIaPSfkS2y+6v8yIf884xljSTz8PHxkf1L9C9c17U9umIwGNgjOboWrutN9X5427/udtl2u7WfeiiKIsvG4++j+fAxnzKvghKOT7VeLkt10lIURblcV5X970HEFVaikp5XlGvbEJ1YwtU6qqkFEP5m/1SOevO8mDzksxXxBu0aKy5DFTeDr+gzpdXt2qmrobeUrp8n+ewp0Rw+hy9cbxaT/D5kNUxhE9pUuycnHGFtez+hteDCm8X92SpAYRXc2coe3xeQ8J0G1xBeLUnfuaoQGI9H8/kwy/I8tx9mVVVl2UGVVfvdbtVaVann8MvUHlNpHsdkKqHhRVPv2H9KwVlwRR9pSeiGml5yWoFFFmbrFiVL9QzjHVd4XdrzhpCU5UAWZukWyyRkNURhTjYnZKugCTPCC9xmUaEI4+FNK7gGgjAc3gR1KcKob5K6fmE0nRPV9Qqjvql1VZ/cFgZ9kw2v4qYw6JtueBW36uH6/RUpA8t5aMXWKVbcARbflNNZ0x5hLL7F90f5NV1J2oWrPZLP42Havu1TPJvFAzBNp/qrwDmXsw0AMZb8L2ky+4poN3ClK/fSrOm3on5alst1lAK6TRgbULY/kJSnsrS/FkLw5JeHFmEswE5fo2p/AUd5y2i7haVGHNL7AASsJYXP7+BYmx6Y0m5h9h0MpggVxujGKczM6Mi2DcgUrcYpDNb85hQ6sW2A4uwSBs9Zt9+hriE8zOByqZv3zlcVV7PJc+tWTTdW/BR41q4fwjJbNML9sH36vbGHBL6AsE7sBVnZIVwfdvbofli9UY27ibAuABzbfdUwWy96SnTsq1/Uzsu2fYLoo4U2EBQpMGiPqJjCgQMDtjTJOJowNtzlPREpxnHuYWX75wcyWzN94Vzu3YFwH1vxE9gRxoJ7hNE+oeUIwuHj20vwxPa3LZ7SxfIne+FhOkeNCUltxU/h9Bz88BrgU/C2LxzhYnTcPMgiH4G3lTfEssJiCy2D4dgeSeMShi+v4EILeg7bfWWPWnAJw5dXKqEV0UIs3kunjlMYz2k5Yp2DUzhel9E/7pQGL6+3xwgAW5724xa+3xB7+82WTgsc3JHKFRLR5plahMGklstpNKO9I4E2YTCp6ZNpt0EDTBgJ2DH1NeD4XaR6gCtUf+vtwj0aR/S9JYwaMyc8GL6Ulm8Jw1UpL8hwLUy60jeF8bZxZXyCiZZZt4VxY1CZMZ9GvJM8wh2cwQn45aW35hPu5iwUFaedgITyC3OCrCm8G+lOX5/ECLiwBGFekBuaDYQXZ6W3XXJVDSH9BUmYG+S4hHWPNOGElUOfBlThRJXDH3504fSUw597ihBhBb/7EiM8uIZA4VTCjO+oDRZW9O3M2j+MCCt6c0Y30R4BhRWxNoC3I7AfniOs6U5aRFbDE9bwR8Ie1KhUxtXAFzbIvLpyifAbPAYhYYuJtoC4q9QQQlb4SFMHhak3r6NF8jzSwZfx6rcLP78tyn6oGI3mQ/udUl28c2jp/+uWO6ZtqeXL8l/4a5NlfwH/JMwMMjwBHgAAAABJRU5ErkJggg==");
  background-size: calc(100%) calc(100%);
}
.number7{
  height: 100%;
  width: 100%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAArJJREFUeF7tnDtOw0AURQ1rAQqUFYQVIBqqLMGUbICSBaQNHS0VDckKyAoQBclewptkCojiyL7v64lPg5FA4ujeefZYQ842m011SpznryfDyQk3V3rxcPP8la97x2jyOnu8yN/8h4QPM6/zT/SR8XSVNfYZ1nDpDMKlMwiXziBcOoNw6ZQpPJ7cHX6QLlS4fmrYOBAFCtfz2W2+PEDk7eFyucxXHaB90mdzvsRu0xSQ1XSc/8Qu1PP8601EFVbSDSsMvX1o3vX/IaQw9rKlRbxEQGFMt1W8RDhhbPG21Q0njOm2bPOWWMK6bd4SSRh8MdwhXiKOMNjmTvESUYSNdMMIm7R5Swhhs3iJAMKgLhIv4S8MthmKl/AWto2X8BVGddF4CVdhsM14vISjsEO8hJ+wR7yEl7BPvISPMKrLjZdwEUbbzI6XcBB2jJewF/aMl7AWhuMV8rUWRuOVqXPCVNg9XsJS2HdaZQyF/eucMBOOUOeElTAcr7CvlXCMOidMhOE6y/uaCIepc8LgUMvi/SVfdeTI4SMGWVyNSHVOaCe8/ngDjuIk6vsjh48YZHEl4OWrlK/20Ao1rnZoCuPLV89Xcw3jy1dnPGeyuDz48lXMVzFh+O6rm6/aadqovlrCYX2VhOP6qgwt/HakO6+2KCSM344M8lWodGxfeeHgvuLC0X2lhcP7CgszfKvRlYWvsPDqG/bV2u/vIyqMP2+Y+YoKM3zH15f5ShtBYY6vzcBKyAmvf/B/3DMaWAkxYc6ANlvAhJQwx9duARNSwowbkmWhxYQZA8u00FLCnIFlWmghYc4Cti20kDBnAdsWWka4R4UWEe5ToUWEOYU2D1hAmFNo+4AFhPsVMF+Y88jhEDBbmFVoh4DZwpxCewTMFe5dwEc+i6dQ+FO6ZwzCpTMIl01V/QKmMCSjOUrC6AAAAABJRU5ErkJggg==");
  background-size: calc(100%) calc(100%);
}
.number8{
  height: 100%;
  width: 100%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAIAAACemCBBAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAALpJREFUeF7t27ERgzAQAEHsWqAYN0KJuBjoBTtQBwzJcpvoI2kuUCa9zvOcnuQ91scoWFewrmBdwbqCdQXrCtYVrCtYV7CuYF3BuoJ1BesK1hWsK1hXsK5g3eOCrz9MO47vvo/5TsvymecxX/EPvmZbx043W7dx4DXdYV3BuoJ1BesK1hWs6xuPrmBdwbqCdQXrCtYVrCtYV7CuYF3BuoJ1BesK1hWsK1hXsK5gXcG6gnUF6wrWPSx4mn6Se5ZtmfkZxAAAAABJRU5ErkJggg==");
  background-size: calc(100%) calc(100%);
}
.delayPont{
  height: 12%;
  width: 14%;
  position: absolute;
  bottom:0;
  right: 0;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAXCAIAAAB1dKN5AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAOdJREFUSEu11csRgyAQgOFNalEOTCqgg9ysgnosxRPpIBVkPIi9GNisCmLwAf6nkJBvmElkb8MwQNY2xL5/aQ3QNU3Lq4oBlOWzKOjDPxlxJa2kELQjTMhaadoZFIoWo2/GE3KV9cXd2pioA9QVlaR9h1qik6jrY6dz8s1RPHe+MdckMQ30yJ+YCrrk3S777oNvZwnFDL1b82hhucQ5FAv2wEVCgpf06qrf+oL/Y9IzA1IRYptE08lzep4vnjloeKP5okmrvaq5d5eaLRAxw0YvytglHp8zOGbskMEV5xVjm4Mm9ywE+ALsZM5JdvK/qQAAAABJRU5ErkJggg==");
  background-size: calc(100%) calc(100%);
}
.footer{
  height: 25%;
}
.minLine{
  height: 25%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAKCAIAAACsZk5rAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAChJREFUSEtj/P//P8NIAkxQesSAUQ+PglEwCoYUGK2WhjsYYR5mYAAA0O4GB4zuHj4AAAAASUVORK5CYII=");
  background-size: calc(100%) calc(100%);
}
.heightPoint{
  height: 25%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAXCAIAAAB1dKN5AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAOdJREFUSEu11csRgyAQgOFNalEOTCqgg9ysgnosxRPpIBVkPIi9GNisCmLwAf6nkJBvmElkb8MwQNY2xL5/aQ3QNU3Lq4oBlOWzKOjDPxlxJa2kELQjTMhaadoZFIoWo2/GE3KV9cXd2pioA9QVlaR9h1qik6jrY6dz8s1RPHe+MdckMQ30yJ+YCrrk3S777oNvZwnFDL1b82hhucQ5FAv2wEVCgpf06qrf+oL/Y9IzA1IRYptE08lzep4vnjloeKP5okmrvaq5d5eaLRAxw0YvytglHp8zOGbskMEV5xVjm4Mm9ywE+ALsZM5JdvK/qQAAAABJRU5ErkJggg==");
  background-size: calc(15%) calc(100%);
  background-position: center;
  background-repeat:no-repeat;
}
.height{
  height: 25%;
}

</style>
