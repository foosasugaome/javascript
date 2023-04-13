function call_loop () {
  let i = 0 // Initialize a counter variable
  var digits = ''
  while (i < 10) {
    // Condition to continue looping as long as i is less than 10
    digits += '<br />' + i
    i++ // Increment the value of i by 1 in each iteration
  }
  document.getElementById('Loop').innerHTML = digits; // Output the value of i
}

var Instruments = ["Violin",
"Viola",
"Cello",
"Double Bass",
"Harp",
"Flute",
"Piccolo",
"Clarinet",
"Bass Clarinet",
"Oboe",
"English Horn",
"Bassoon",
"Contrabassoon",
"Trumpet",
"French Horn",
"Trombone",
"Bass Trombone",
"Tuba",
"Timpani",
"Snare Drum",
"Bass Drum",
"Cymbals",
"Gong",
"Triangle",
"Tambourine",
"Maracas",
"Castanets",
"Xylophone",
"Glockenspiel",
"Vibraphone",
"Marimba",
"Celesta",
"Piano",
"Organ",
"Accordion",
"Concertina",
"Mandolin",
"Guitar",
"Harp Guitar",
"Sitar",
"Banjo",
"Tzouras",
"Oud",
"Ney",
"Kemenche",
"Santoor",
"Koto",
"Shakuhachi",
"Erhu",
"Pipa",
"Guzheng",
"Dizi"];

var Content =  "";
var  Y;
function for_loop(){
    for (Y=0; Y  < Instruments.length;  Y++)  {
        Content +=  Instruments[Y] + "<br />"
    }
    document.getElementById("List_of_Instruments").innerHTML  =  Content;
}