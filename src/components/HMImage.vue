<template>
    <div id="image">
      <img src="../assets/gallows.png">
      <p id="head"> O </p>
      <p id="body"> I </p>
      <p id="armR"> _ </p>
      <p id="armL"> _ </p>
      <p id="legR"> \ </p>
      <p id="legL"> / </p>
      <p id="lose"> YOU LOSE </p>
    </div>    
</template>

<script>
export default {
    name: 'HMImage',
    methods: {
        showPart: function() {
                // console.log("in showPart " + this.wrongGuesses);
                switch(this.wrongGuesses) {
                    case 0:
                        break;
                    case 1:
                        // console.log("in the switch 1");
                            var x = document.getElementById("head");
                            x.style.display = "block";
                        break;
                    case 2:
                        // console.log("in the switch 2");
                            var x = document.getElementById("body");
                            x.style.display = "block";
                        break;
                    case 3:
                        // console.log("in the switch 3");
                            var x = document.getElementById("armR");
                            x.style.display = "block";
                        break;
                    case 4:
                        // console.log("in the switch 4");
                            var x = document.getElementById("armL");
                            x.style.display = "block";
                        break;
                    case 5:
                        // console.log("in the switch 5");
                            var x = document.getElementById("legR");
                            x.style.display = "block";
                        break;
                    case 6:
                        // console.log("in the switch 6");
                            var x = document.getElementById("legL");
                            x.style.display = "block";
                            var x = document.getElementById("lose");
                            x.style.display = "block";
                        break;
                }
        }
    },
    mounted() {
        this.$root.$on('eventing', data => {
            //console.log(data + " data from HMImage");
            this.wrongGuesses = data;
            //console.log(this.wrongGuesses + " Wrong Guesses from HMImage");
                    this.showPart();
        })
    },
    data() {
        return {
            wrongGuesses: 0
        };
    }
}
</script>

 <style scoped>
    #image {
        position: relative;

    }
        #head{
            color: #42b983;
            position: absolute;
            font-size: 3em;
            display: none;
            top:15%;
            left:54.7%;
        }
        #body{
            color: #42b983;
            position: absolute;
            display: none;
            font-size: 3em;
            top:26%;
            left:56.7%;
        }
        #armR{
            color: #42b983;
            position: absolute;
            display: none;
            font-size: 3em;
            top:15%;
            left:58%;
        }
        #armL{
            color: #42b983;
            position: absolute;
            display: none;
            font-size: 3em;
            top:15%;
            left:54%;
        }
        #legR{
            color: #42b983;
            position: absolute;
            display: none;
            font-size: 3em;
            top:37%;
            left:57.5%;
        }
        #legL{
            color: #42b983;
            position: absolute;
            display: none;
            font-size: 3em;
            top:37%;
            left:55%;
        }
        #lose{
            color: red;
            position: absolute;
            display: none;
            font-size: 5em;
            top:20%;
            left:23%;
        }
 </style>
 