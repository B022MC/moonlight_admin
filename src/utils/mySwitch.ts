/**
 * @author  B022MC
 * @date  2023/9/13 15:00
 * @Software: WebStorm moonlight_admin
 * @version 1.0
 */
import { ref, Ref } from 'vue'
import wuwuImage from '@/assets/img/wuwu.jpeg'; // 导入图片资源
import waokuImage from '@/assets/img/waoku.jpg'; // 导入另一张图片资源

let flag: Ref<boolean> = ref(true)

const mySwitch = (): void => {
    const pre_box: HTMLElement | null = document.querySelector('.pre-box')
    const img: HTMLImageElement | null = document.querySelector("#avatar")

    if (flag.value) {
        if (pre_box) {
            pre_box.style.transform = "translateX(100%)"
            pre_box.style.backgroundColor = "#c9e0ed"
        }
        if (img) {
            img.src = wuwuImage; // 使用导入的图片资源
        }
    } else {
        if (pre_box) {
            pre_box.style.transform = "translateX(0%)"
            pre_box.style.backgroundColor = "#edd4dc"
        }
        if (img) {
            img.src = waokuImage; // 使用导入的图片资源
        }
    }

    flag.value = !flag.value
}

export default mySwitch