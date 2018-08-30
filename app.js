const cards = [];


const book = new Vue({
    el:"#app",
    data:{
        cards:cards,
        inputTitle:'',
        inputDesc:'',
        edit:false,
        editIndex:0,
        err:false
    },
    methods:{
        createNewCard:function(){
            if (!this.inputTitle || !this.inputDesc ) {
                this.err = true;
            }else{
            this.cards.push({
                title:this.inputTitle,
                desc:this.inputDesc
            });
            this.err = false;
            this.resetProps();
            }
        },
        editCard:function(index){
            console.log(index)
            this.inputTitle = this.cards[index].title;
            this.inputDesc = this.cards[index].desc;
            this.editIndex = index;
            this.edit = true;
        },
        updateCard:function(){
            cards.splice(this.editIndex,1);
            this.createNewCard();
            this.resetProps();

        },
        resetProps:function(){
            this.inputTitle = "";
            this.inputDesc = "";
            this.edit = false;
        }
    },
    computed:{
        isCardsEmpty:function(){
            return this.cards.length;
        }
    }
});