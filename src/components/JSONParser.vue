<template>
    <div class = "JSONParser">
        <!--input 
            id="child-input" 
            type="text" 
            name="msg" 
            v-model="word" 
            v-on:keyup="emitToParent"-->
        <h1> {{randDictDef}} </h1>
    </div>
</template>

<script>
import dictionary from "../assets/dictionary.json"
export default {
    methods: {
        check: function(){
            //console.log(this.message + "This is the message from parent");
            //this.word = "SANDWICH";
            this.word = this.parseDict();
            console.log(this.word + " this is the word from the JSON");
            this.emitToParent(this.word);
        },
        parseDict: function() {
            let obj_keys = Object.keys(dictionary);
            let ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
            let randDictWord = ran_key;
            this.randDictDef = "Definition:  " + dictionary[ran_key];
            return randDictWord;
        },
        emitToParent(event) {
            this.$emit('childToParent', this.word);
        }
    },
    mounted() {
        this.check();
    },
    data() {
        return {
        word: "HELLO",
        randDictDef: ""
        };
    },
    name: "JSONParser",
    props: ['message'] //signal to get a word
};
</script>

<style scoped>
    h1{
            font-size: 1em;
        }
</style>
