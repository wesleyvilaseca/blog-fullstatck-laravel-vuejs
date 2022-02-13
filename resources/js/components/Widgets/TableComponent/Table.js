export default {
    name: "TableComponent",
    props: {
        data: Object, 
        config: Object,
        isEdit: Boolean,
        isDelet: Boolean,
        deletemethod: String,
        editmethod: String
    },
    data() {
        return {
        }
    },
    methods: {
        edit(data){
            this.editmethod(data);
        },
        delet(data){
            this.deletemethod(data);
        }
    },
    created() {
    }
}