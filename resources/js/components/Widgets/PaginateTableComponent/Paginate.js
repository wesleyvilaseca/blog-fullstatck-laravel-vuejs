export default {
    name: "PaginateTable",
    data() {
        return {
            paginateLimit: 2,
        }
    },
    props: {
        currentpage: Number,
        lastpage: Number,
        links: Object,
        callMethod: String
    },
    methods: {
        getCategories(data) {
            this.callMethod(data);
        }
    },
    created() {

    },
    updated() {

    }
}