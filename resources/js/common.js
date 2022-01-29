export default {
    data() {
        return {

        }
    },
    methods: {
        callApi(method, url, data = null) {
            try {
                let data = axios({
                    method: method,
                    url: url,
                    data: data
                });
                return data;
            } catch (e) {
                return e.response;
            }

        },
        
        i(desc, title="Hey") {
            this.$Notice.info({
                title: title,
                desc: desc
            });
        },
        s(desc, title="Great!") {
            this.$Notice.success({
                title: title,
                desc: desc
            });
        },
        w(desc, title="Oops!") {
            this.$Notice.warning({
                title: title,
                desc: desc
            });
        },
        e(desc, title="Oops!") {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        }, 
        swr(desc='Somethingn went wrong! Please try again.', title="Oops") {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        }, 
    },
}