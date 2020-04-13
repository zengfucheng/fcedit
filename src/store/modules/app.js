/**
 *
 * name: app
 * date: 2019-04-29
 * author: cengfucheng
 * about:  app 相关信息
 *
 */
// 操作cookie， Cookies.set(name,value) Cookies.get(name) Cookies.remove(name,{ path: '', domain: '.yourdomain.com' })
import Cookies from 'js-cookie';

export default {
    name: 'app',
    state: {
        app: 'ttd'
    }
}