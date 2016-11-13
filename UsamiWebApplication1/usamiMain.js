var imageList = [];
var imageOrignal = [
{ "id": "1", "Style": "伝統的", "Brand": "Chanel" },
{ "id": "2", "Style": "伝統的", "Brand": "Chanel" },
{ "id": "3", "Style": "伝統的", "Brand": "Louis Vuitton" },
{ "id": "4", "Style": "伝統的", "Brand": "Louis Vuitton" },
{ "id": "5", "Style": "伝統的", "Brand": "Valentino" },
{ "id": "6", "Style": "伝統的", "Brand": "Valentino" },
{ "id": "7", "Style": "前衛的", "Brand": "ANREALAGE" },
{ "id": "8", "Style": "前衛的", "Brand": "ANREALAGE" },
{ "id": "9", "Style": "前衛的", "Brand": "Balenciaga" },
{ "id": "10", "Style": "前衛的", "Brand": "Balenciaga" },
{ "id": "11", "Style": "前衛的", "Brand": "COMME des GARCONS" },
{ "id": "12", "Style": "前衛的", "Brand": "COMME des GARCONS" },
{ "id": "13", "Style": "前衛的", "Brand": "ISSEY MIYAKE" },
{ "id": "14", "Style": "前衛的", "Brand": "ISSEY MIYAKE" },
{ "id": "15", "Style": "前衛的", "Brand": "Maison Margiela" },
{ "id": "16", "Style": "前衛的", "Brand": "Maison Margiela" },
{ "id": "17", "Style": "前衛的", "Brand": "Rick Owens " },
{ "id": "18", "Style": "前衛的", "Brand": "Rick Owens " },
{ "id": "19", "Style": "前衛的", "Brand": "Yohji yamamoto" },
{ "id": "20", "Style": "前衛的", "Brand": "Yohji yamamoto" },
{ "id": "21", "Style": "前衛的", "Brand": "Undercover" },
{ "id": "22", "Style": "前衛的", "Brand": "Undercover" },
{ "id": "23", "Style": "フェミニン", "Brand": "Stella Mccartney" },
{ "id": "24", "Style": "フェミニン", "Brand": "Stella Mccartney" },
{ "id": "25", "Style": "フェミニン", "Brand": "Rochas" },
{ "id": "26", "Style": "フェミニン", "Brand": "Rochas" },
{ "id": "27", "Style": "フェミニン", "Brand": "Paul and Joe" },
{ "id": "28", "Style": "フェミニン", "Brand": "Paul and Joe" },
{ "id": "29", "Style": "フェミニン", "Brand": "Loewe" },
{ "id": "30", "Style": "フェミニン", "Brand": "Loewe" },
{ "id": "31", "Style": "フェミニン", "Brand": "Chloe" },
{ "id": "32", "Style": "フェミニン", "Brand": "Chloe" },
{ "id": "33", "Style": "エキゾチック", "Brand": "Acne Studios" },
{ "id": "34", "Style": "エキゾチック", "Brand": "Acne Studios" },
{ "id": "35", "Style": "エキゾチック", "Brand": "Alexander McQueen" },
{ "id": "36", "Style": "エキゾチック", "Brand": "Alexander McQueen" },
{ "id": "37", "Style": "エキゾチック", "Brand": "Dries Van Noten" },
{ "id": "38", "Style": "エキゾチック", "Brand": "Dries Van Noten" },
{ "id": "39", "Style": "ポップ", "Brand": "Isabel Marant" },
{ "id": "40", "Style": "ポップ", "Brand": "Isabel Marant" },
{ "id": "41", "Style": "ポップ", "Brand": "Kenzo" },
{ "id": "42", "Style": "ポップ", "Brand": "Kenzo" },
{ "id": "43", "Style": "ポップ", "Brand": "Carven" },
{ "id": "44", "Style": "ポップ", "Brand": "Carven" },
{ "id": "45", "Style": "ポップ", "Brand": "HAIDER ACKERMANN" },
{ "id": "46", "Style": "ポップ", "Brand": "HAIDER ACKERMANN" },
{ "id": "47", "Style": "ポップ", "Brand": "JACQUEMUS" },
{ "id": "48", "Style": "ポップ", "Brand": "JACQUEMUS" },
{ "id": "49", "Style": "ポップ", "Brand": "Marimekko" },
{ "id": "50", "Style": "ポップ", "Brand": "Marimekko" },
{ "id": "51", "Style": "ポップ", "Brand": "Olympia Le Tan" },
{ "id": "52", "Style": "ポップ", "Brand": "Olympia Le Tan" },
{ "id": "53", "Style": "ポップ", "Brand": "Sacai" },
{ "id": "54", "Style": "ポップ", "Brand": "Sacai" },
];
for (var i = 1; i < imageOrignal.length; i++) {
    imageOrignal[i].Image = "Image/" + imageOrignal[i].id + ".jpg";
    imageOrignal[i].visble = true;
}


imageList =  CreateNewList(imageOrignal);
AddOrder(imageList);


var currentPair = null;
var selectedPair = [];

var v = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        imageList: imageList,
        selectedPair: selectedPair,
        scene: 0,
        result: 0,
        showResult: false,
        showMark:false,
        showReplay:false
    },

    methods: {
        begin: function (index) {
            this.message = imageList[index].id;
            if (currentPair == null) {
                currentPair = [];
                selectedPair.push(currentPair);
            }
            currentPair.push(imageList[index]);
            if (currentPair.length > 1) {
                currentPair = null;
                if (selectedPair.length == 5) {
                    this.showMark = true;
                }
            }

            imageList[index].visble = false;
        },
        clearSelect: function (index) {
            var pair = selectedPair[index];
            for (var i = 0; i < pair.length; i++) {
                pair[i].visble = true;
            }
            selectedPair.$remove(pair);
            this.showMark = false;
        },
        mark:function()
        {
            var count = 0;
            for (var i in selectedPair) {
                if( selectedPair[i][0].Style == selectedPair[i][1].Style)
                {
                    count++;
                    selectedPair[i].isHit = true;
                }
                else
                {
                    selectedPair[i].isHit = false;
                }
            }
            this.showResult = true;
            this.result = count;
            this.showReplay = true;
        },
        replay:function()
        {
            imageList=CreateNewList(imageOrignal);
            this.$set('imageList', imageList);
            for (var i = 0; i <5; i++) {
                this.selectedPair.pop();
            }

            this.showResult = false;
            this.showMark = false;
            this.showReplay = false;
        }
    }
});

function CreateNewList(inputList)
{
    var g1 = _.groupBy(inputList, n=>n.Style);
    var r = [];
    for (var item in g1) {
        var g2 = _.groupBy(g1[item], n=>n.Brand);
        var g3 = _.find(_.shuffle(g2));
        for (var i in g3) {
            g3[i].visble = true;
            r.push(g3[i]);
        }
    }

    return _.shuffle(r);
}

function AddOrder(list) {
    for(var i=0;i < list.length;i++)
    {
        list[i].order = i;
    }
}

