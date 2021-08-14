// Soal No.1
// Buat data array berisi minimal 5 pekerjaan dibidang IT
// Tampilkan panjang data array
// Tampilkan seluruh item pada array
// Gunakan console.log
// Tampilkan data tersebut pada Halaman HTML menggunakan list tag

// Jawaban

let itJobs = [
            'Software Developer',
            'Database Administrator',
            'Hardware Engineer',
            'System Analyst',
            'Network Architect',
            'Web Developer',
            'IT Support'
];

// Tampilan di console.log
console.log(itJobs.length);
console.log(itJobs);

// Tampilan di halaman HTML
document.write ("<b>Jawaban No. 1</b> <br>");
document.write ("Panjang data array :"+ itJobs.length +"<br>");
document.write ("Daftar pekerjaan dibidang IT : <ol>");
itJobs.forEach((jobs) => {
    document.write (`<li>${jobs}</li>`);
});
document.write ("</ol><br>");


// Soal No.2
// Buat sebuah data array yang berisi nama tim
// Bagi menjadi 2 tim dan terdiri dari 1 orang leader
// Console.log data dengan memisahkan setiap data menggunakan koma (,)
// Tampilkan list data ke halaman HTML

// Jawaban

let allTeam = ['Rodhiyah','Wiji','Neni','Senti','Fitri','Yani'];

let team1 = allTeam.slice(0,3);
let team2 = allTeam.slice(3,6);

// Tampilan di console.log
console.log(team1,team2);
console.log("Semua Tim: "+allTeam);
console.log("Tim 1: "+team1, "Tim 2: "+team2);

// Tampilan di halaman HTML
document.write ("<b>Jawaban No. 2</b> <br>");
document.write ("Semua Tim : "+allTeam+"<br>");
document.write ("<ol>Tim 1:");
team1.forEach((tim1) => {
    document.write (`<li>${tim1}</li>`);
});
document.write ("</ol>");

document.write ("<ol>Tim 2:");
team2.forEach((tim2) => {
    document.write (`<li>${tim2}</li>`);
});
document.write ("</ol>");


// Soal No.3
// Diberikan 1 data array [3,5,7,9,11]
// Buat sebuah program untuk membuat Array baru dari hasil perkalian array sebelumnya dengan perkalian 5
// Tampilkan pada console.log

// Jawaban

let data = [3,5,7,9,11];

let newData = data.map(num => {
    return num * 5;
});

// Tampilan di console.log
console.log(newData);

// Tampilan di halaman HTML
document.write ("<b>Jawaban No. 3</b> <br>");
document.write ("Array baru dari hasil perkalian array [3,5,7,9,11] dengan perkalian 5 adalah: ["+newData+"] <br>");

// Soal No.4
// Tersedia 2 data Array. Cek apakah ada nilai yang sama pada kedua Array
// Array pertama = [Math, English, Programming]
// Array kedua = [Geography, Spanish, Programming]
// Program akan mengembalikan nilai TRUE or FALSE

// Jawaban

let array1 = ['Math','English','Programming'];
let array2 = ['Geography','Spanish','Programming'];

document.write ("<br><b>Jawaban No. 4</b> <br>");
document.write ("Cek nilai yang sama pada data Array:<br>");
document.write ("Array 1 : [Math, English, Programming] <br>");
document.write ("Array 2 : [Geography, Spanish, Programming] <br>");

array1.forEach((item,index) => {
    if (item == array2[index]){
        console.log(true);
        document.write(true +"<br>");
    }
    else{
        console.log(false);
        document.write(false +"<br>");
    }
});


document.write ("<br><b>Jawaban No. 5</b> <br>");
document.write ("<a href='nomor-5.html' target='_blank'>Lihat jawaban</a> <br>");

document.write ("<br><b>Jawaban No. 6</b> <br>");
document.write ("<a href='nomor-6.html' target='_blank'>Lihat jawaban</a> <br>");

document.write ("<br><b>Jawaban No. 7 (Contact Us)</b> <br>");
document.write ("<a href='contactus.html' target='_blank'>Lihat jawaban</a> <br>");
