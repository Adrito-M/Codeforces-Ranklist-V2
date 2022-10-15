import User from '../models/user'

export default function migrate() {
    const info = [
        {
          name: "Ayush Gangwar",
          email: "ayush.gangwar.cse21@itbhu.ac.in",
          username: "ayush_g3"
        },
        {
          name: "Divyanshi Chauhan",
          email: "divyanshi.chauhan.cse21@itbhu.ac.in",
          username: "Divyanshi66"
        },
        {
          name: "Tushar Talesara",
          email: "tushar.talesara.cse21@itbhu.ac.in",
          username: "tushar.talesara"
        },
        {
          name: "Ankit Kansal",
          email: "ankit.kansal.cse21@itbhu.ac.in",
          username: "AK_173"
        },
        {
          name: "G Kiran Kumar",
          email: "gajjela.kirankumar.cse21@itbhu.ac.in",
          username: "kiran057"
        },
        {
          name: "Satyam Chitransh",
          email: "satyam.chitransh.cse21@itbhu.ac.in",
          username: "chitransh_itbhu_6102003"
        },
        {
          name: "Parth Kesarwani",
          email: "parth.kesarwani.cse21@itbhu.ac.in",
          username: "pk_27"
        },
        {
          name: "Soustab Haldar",
          email: "soustab.haldar.cse21@itbhu.ac.in",
          username: "primalphoenix"
        },
        {
          name: "Eshaan Aggarwal",
          email: "eshaan.aggarwal.cse21@itbhu.ac.in",
          username: "eshaan123aggarwal"
        },
        {
          name: "Vaibhav Khater",
          email: "vaibhav.khater.cse21@itbhu.ac.in",
          username: "kingmessi"
        },
        {
          name: "Aaryan Kumar",
          email: "aaryan.kumar.cse21@itbhu.ac.in",
          username: "AKumar666"
        },
        {
          name: "Jayant Pranjal",
          email: "jayant.pranjal.cse21@itbhu.ac.in",
          username: "jayantpranjal"
        },
        {
          name: "Rohith Peddi",
          email: "peddi.rohith.cse21@itbhu.ac.in",
          username: "rohithpeddi7"
        },
        {
          name: "Adrito Mukherjee",
          email: "adrito.mukherjee.cse21@itbhu.ac.in",
          username: "MadRat_0"
        },
        {
          name: "Aryan Patel",
          email: "patel.aryan.eee21@itbhu.ac.in",
          username: "ELI2725"
        },
        {
          name: "Ruchira Naskar",
          email: "ruchira.naskar.cse21@itbhu.ac.in",
          username: "ruchPotterCoder"
        },
        {
          name: "Sahil Chhabra",
          email: "sahil.chhabra.met21@itbhu.ac.in",
          username: "sahil45"
        },
        {
          name: "Saikat Mondal",
          email: "saikat.mondal.cse21@itbhu.ac.in",
          username: "saikatmondal_21"
        },
        {
          name: "Yash Agrawal",
          email: "yash.agrawal.cse21@itbhu.ac.in",
          username: "silentcoder6318"
        },
        {
          name: "Yashwini Bansal",
          email: "yashwini.bansal.cse21@itbhu.ac.in",
          username: "YBansal95"
        },
        {
          name: "Soumyadeep Das",
          email: "soumyadeep.das.cse21@itbhu.ac.in",
          username: "soumyadeep_69"
        },
        {
          name: "Mayank Verma",
          email: "mayank.verma.cse21@itbhu.ac.in",
          username: "mayank.verma.cse21"
        },
        {
          name: "Anshiv Singla",
          email: "anshiv.singla.cse21@itbhu.ac.in",
          username: "sv1shan"
        },
        {
          name: "Kritika Tripathi",
          email: "kritika.tripathi.mec21@itbhu.ac.in",
          username: "Kritika094"
        },
        {
          name: "Archit Kumar",
          email: "archit.kumar.cse21@itbhu.ac.in",
          username: "itz_archit"
        },
        {
          name: "Bhav Khurana",
          email: "bhav.khurana.cse21@itbhu.ac.in",
          username: "bhav_khurana"
        },
        {
          name: "Manmeet Muskan",
          email: "manmeet.muskan.cse21@itbhu.ac.in",
          username: "manmeet.muskan.cse21"
        },
        {
          name: "Ujjawal Modi",
          email: "ujjawal.modi.cse21@itbhu.ac.in",
          username: "crzy22"
        },
        {
          name: "Raghav Singh",
          email: "raghav.singh.cse21@itbhu.ac.in",
          username: "hakaishin_3181"
        },
        {
          name: "Abhay Kumar",
          email: "abhay.kumar.cse21@itbhu.ac.in",
          username: "raiden_21"
        },
        {
          name: "Vigneshwaran S",
          email: "s.vigneshwaran.cse21@itbhu.ac.in",
          username: "vigcancode"
        },
        {
          name: "Siddanth Shetty",
          email: "siddanth.shetty.mat21@itbhu.ac.in",
          username: "Siddanth_12"
        },
        {
          name: "Vedika Chandra",
          email: "vedika.chandra.cse21@itbhu.ac.in",
          username: "phoenix_vc"
        },
        {
          name: "Hardik Agrawal",
          email: "hardik.agrawal.cse21@itbhu.ac.in",
          username: "hardik_836"
        },
        {
          name: "Maithri Muralikrishna",
          email: "m.muralikrishna.cse21@itbhu.ac.in",
          username: "mai_3"
        },
        {
          name: "Shubham Yadav",
          email: "shubham.yadav.cse21@itbhu.ac.in",
          username: "uewbv"
        },
        {
          name: "Rajat Shukla",
          email: "rajat.shukla.ece21@itbhu.ac.in",
          username: "rajat77shukla"
        },
        {
          name: "Anusha Mahajan",
          email: "anusha.mahajan.ece21@itbhu.ac.in",
          username: "nush.mahajan"
        },
        {
          name: "Yash Babel",
          email: "yash.babel.cse21@itbhu.ac.in",
          username: "yashbabel4"
        },
        {
          name: "Jatin Garg",
          email: "jatin.garg.cse19@itbhu.ac.in",
          username: "rivalq"
        },
        {
          name: "Mridul Ramakrishnan",
          email: "mridul.ramakrishnan.mat21@itbhu.ac.in",
          username: "mridulr2003"
        },
        {
          name: "Sarthak Vishwakarma",
          email: "sarthak.vishwakarma.eee21@itbhu.ac.in",
          username: "Sarthak_324"
        },
        {
          name: "Shailesh Agarwal",
          email: "shailesh.agarwal.eee21@itbhu.ac.in",
          username: "shailesh_2583"
        },
        {
          name: "Manmohan Shrivastava",
          email: "manmohan.shrivastava.eee21@itbhu.ac.in",
          username: "EyeStrain11"
        },
        {
          name: "Mayank Rampuriya",
          email: "mayank.rampuriya.eee21@itbhu.ac.in",
          username: "Mayank_Rampuriya"
        },
        {
          name: "Sachin Kumar Gupta",
          email: "sachinkumar.gupta.cse21@itbhu.ac.in",
          username: "Dracarys_7"
        },
        {
          name: "Prakhar Singh",
          email: "sprakhar.janardan.eee21@itbhu.ac.in",
          username: "pjs21703"
        },
        {
          name: "Yuktam Singh",
          email: "yuktam.singh.eee21@itbhu.ac.in",
          username: "Yuktam"
        },
        {
          name: "Harsh Rai",
          email: "harsh.rai.eee21@itbhu.ac.in",
          username: "Harsh_Rai"
        },
        {
          name: "Shivam Gupta",
          email: "shivam.gupta.ece21@itbhu.ac.in",
          username: "dhirack"
        },
        {
          name: "Amit Mishra",
          email: "amit.mishra.eee21@itbhu.ac.in",
          username: "kev_2017_____"
        },
        {
          name: "Md Danish Ansari",
          email: "mddanish.ansari.mat21@itbhu.ac.in",
          username: "danish_droid"
        },
        {
          name: "Ansh Chaudhary",
          email: "ansh.chaudhary.mat21@itbhu.ac.in",
          username: "anshchaudhary"
        },
        {
          name: "Madhav Bansal",
          email: "madhav.bansal.mat21@itbhu.ac.in",
          username: "madhav_23"
        },
        {
          name: "Akshil Ahuja",
          email: "akshil.ahuja.mat21@itbhu.ac.in",
          username: "akshil_ahuja"
        },
        {
          name: "Majjiga Deepak Sai",
          email: "majjiga.deepaksai.ece21@itbhu.ac.in",
          username: "Deepaksai"
        },
        {
          name: "Sheel Ranjan Bajpai",
          email: "sheelranjan.bajpai.mat21@itbhu.ac.in",
          username: "GamerSheel"
        },
        {
          name: "Dheeraj Yadav",
          email: "dheeraj.yadav.cse21@itbhu.ac.in",
          username: "dheeraj_yadav"
        },
        {
          name: "Abhishek",
          email: "abhishek.student.eee21@itbhu.ac.in",
          username: "_polarbear"
        },
        {
          name: "Mukesh kumar",
          email: "mukesh.kumar.mat21@itbhu.ac.in",
          username: "mukeshkumar032004"
        },
        {
          name: "Harsh Shrivastava",
          email: "harsh.shrivastava.eee21@itbhu.ac.in",
          username: "Trying_To_Do_Better"
        },
        {
          name: "Vikash Kumar",
          email: "vikash.kumar.mat21@itbhu.ac.in",
          username: "uniquevikash1"
        },
        {
          name: "Nitish Kumar",
          email: "nitish.kumar.mat21@itbhu.ac.in",
          username: "Nitish0666"
        },
        {
          name: "Rohan",
          email: "rohan.student.mat21@itbhu.ac.in",
          username: "Rohan217"
        },
        {
          name: "Kanishk Srivastava",
          email: "kanishk.srivastava.eee21@itbhu.ac.in",
          username: "REDPILLED_Neo"
        },
        {
          name: "Avinash Ranjan",
          email: "avinash.ranjan.cse21@itbhu.ac.in",
          username: "avishaan"
        },
        {
          name: "Ayushi Mittal",
          email: "ayushi.mittal.mat21@itbhu.ac.in",
          username: "ayushi.mm"
        },
        {
          name: "Ojasva Gupta",
          email: "ojasva.gupta.mat21@itbhu.ac.in",
          username: "og_phoenix"
        },
        {
          name: "Aritra Datta",
          email: "aritra.datta.met21@itbhu.ac.in",
          username: "Aritra_Datta"
        },
        {
          name: "Harmanjot Singh",
          email: "harmanjot.singh.cse21@itbhu.ac.in",
          username: "harman_69"
        },
        {
          name: "Nikhil Agarwal",
          email: "nikhil.agarwal.ece21@itbhu.ac.in",
          username: "nik_agarwal12"
        },
        {
          name: "Saket Kumar Singh",
          email: "saket.kumarsingh.ece21@itbhu.ac.in",
          username: "pika_coder"
        },
        {
          name: "Ipil Besra",
          email: "ipil.besra.ece21@itbhu.ac.in",
          username: "Ipil"
        },
        {
          name: "Lalit Singh",
          email: "lalit.singh.ece21@itbhu.ac.in",
          username: "lalit9389"
        },
        {
          name: "Ayush Singh",
          email: "ayush.singh.ece21@it.bhu.ac.in",
          username: "ayush.singh.ece21"
        },
        {
          name: "Neeraj Saketh Vamsi Pitla",
          email: "pneeraj.sakethvamsi.ece21@itbhu.ac.in",
          username: "neeraj_036"
        },
        {
          name: "Gargi Nigam",
          email: "gargi.nigam.ece21@itbhu.ac.in",
          username: "Gargi21"
        },
        {
          name: "Prasoon Sahay",
          email: "prasoon.sahay.ece21@itbhu.ac.in",
          username: "Prasoon2016"
        },
        {
          name: "Giridhar Madhav",
          email: "ygiridhar.madhav.ece21@itbhu.ac.in",
          username: "giridhar_4009"
        },
        {
          name: "Abhishek Kumar",
          email: "abhishek.ukumar.ece21@itbhu.ac.in",
          username: "19104838"
        },
        {
          name: "Tarun Siddharth",
          email: "starun.siddharth.ece21@itbhu.ac.in",
          username: "SIDD1123"
        },
        {
          name: "Md Athar",
          email: "md.athar.ece21@itbhu.ac.in",
          username: "MdAthar"
        },
        {
          name: "Shiv Bhushan Singh",
          email: "shivbhushan.singh.apd21@itbhu.ac.in",
          username: "Shivbhushan"
        },
        {
          name: "Priyanshu",
          email: "priyanshu.student.ece21@itbhu.ac.in",
          username: "paloxzzz"
        },
        {
          name: "Abhishek Anand",
          email: "abhishek.anand.ece21@itbhu.ac.in",
          username: "Iamabhianand"
        },
        {
          name: "Tushar Karale",
          email: "karaletushar.bharat.ece21@itbhu.ac.in",
          username: "tsar_10"
        },
        {
          name: "Anshu Soni",
          email: "anshu.soni.ece21@itbhu.ac.in",
          username: "Anshu_nyt"
        },
        {
          name: "Satyam Aditya",
          email: "satyam.aditya.eee21@itbhu.ac.in",
          username: "Royal_knight_07"
        },
        {
          name: "Samarth Tankasali",
          email: "samarth.stankasali.ece21@itbhu.ac.in",
          username: "rasbutass"
        },
        {
          name: "Sachin Kumar",
          email: "sachin.kumar.eee21@itbhu.ac.in",
          username: "Sachin2021"
        },
        {
          name: "Palti Sumasri",
          email: "palti.sumasri.ece21@itbhu.ac.in",
          username: "Suma_27"
        },
        {
          name: "Arnav Goyal",
          email: "arnav.goyal.ece21@itbhu.ac.in",
          username: "Pikachu_11"
        },
        {
          name: "Jaya Kedia",
          email: "jaya.kedia.met21@itbhu.ac.in",
          username: "CheekJK"
        },
        {
          name: "Madhavendra Rathore",
          email: "madhavendra.srathore.cse21@itbhu.ac.in",
          username: "drath10"
        },
        {
          name: "Vaibhav Bansal",
          email: "vaibhav.bansal.ece21@itbhu.ac.in",
          username: "SoloWarrior1"
        },
        {
          name: "Anant Jain",
          email: "anant.jain.ece21@itbhu.ac.in",
          username: "anant_jain_01"
        },
        {
          name: "Archit Pattanaik",
          email: "archit.pattanaik.ece21@itbhu.ac.in",
          username: "kakashi_2003"
        },
        {
          name: "Priti Kumari",
          email: "priti.kumari.eee21@itbhu.ac.in",
          username: "priti2002bwn"
        },
        {
          name: "Aditya Singh",
          email: "aditya.singh.cse21@itbhu.ac.in",
          username: "863aditya"
        },
        {
          name: "Divyansh Sahu",
          email: "divyansh.sahu.mat21@itbhu.ac.in",
          username: "divyansh_08"
        },
        {
          name: "Aditya Aryaman Das",
          email: "aditya.aryamandas.mec21@itbhu.ac.in",
          username: "GraceousX"
        },
        {
          name: "Abhijeet Kumar",
          email: "abhijeet.kumar.cse21@itbhu.ac.in",
          username: "cr1515"
        }
      ]
    info.forEach(entry => {
        const info = entry.email.match(/.[a-zA-Z0-9]*@/)[0]
        User.create({
            ...entry,
            dept: info.slice(1, info.length-3),
            adm_yr: info.slice(info.length-3, info.length-1),
        })
    })
}