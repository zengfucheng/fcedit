/**
 *
 * name: modal
 * date: 2019-05-02
 * author: cengfucheng
 * about: 测试 mixin
 *
 */

export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        showClick() {
            console.log('点击')
            this.show = !this.show;
        }
    }
}