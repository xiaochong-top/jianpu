
// 用于将html 转为图片
import domtoimage from 'dom-to-image';
import JsPDF from 'jspdf' // 用于将图片转为pdf
export default {

    //用于将页面元素转换为图片数据
    async getElementImg(elementID){
        let elementImg
        let elementObg=document.querySelector('#'+elementID)
        await domtoimage.toPng(elementObg).then(dataUrl=>elementImg=dataUrl)
        return elementImg
    },

    //用于将图片转换为PDF文件
    getPdf(imgArr){

        // 获取数组长度
        let pageNam=imgArr.length
        // 定义文件宽度
        let imgWidth = 592.28
        // 定义文件高度
        let imgHeight = 841.89
        // 创建pdf文件对象
        let PDF = new JsPDF('p', 'pt', 'a4')

        // 遍历数组，添加到pdf文件
        imgArr.forEach((item,index)=>{
            PDF.addImage(item, 'JPEG', 0, 0, imgWidth, imgHeight,'alias'+(index+1))
            // 如果后面还有未添加的内容，则追加纸张
            if(pageNam-index>1){
                PDF.addPage()
            }
        })

        // 返回生成的文件对象
        return PDF
    }

}
