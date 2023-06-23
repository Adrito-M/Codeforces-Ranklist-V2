import { User } from "../models";

function migrate() {
    const info = [
        {
          name: "Ayush Gangwar",
          email: "ayush.gangwar.cse21@itbhu.ac.in",
          usernames: [{username: "ayush_g3", valid: true}]
        },
        {
          name: "Divyanshi Chauhan",
          email: "divyanshi.chauhan.cse21@itbhu.ac.in",
          usernames: [{username: "Divyanshi66", valid: true}]
        },
        {
          name: "Tushar Talesara",
          email: "tushar.talesara.cse21@itbhu.ac.in",
          usernames: [{username: "tushar.talesara", valid: true}]
        },
        {
          name: "Ankit Kansal",
          email: "ankit.kansal.cse21@itbhu.ac.in",
          usernames: [{username: "AK_173", valid: true}]
        },
        {
          name: "G Kiran Kumar",
          email: "gajjela.kirankumar.cse21@itbhu.ac.in",
          usernames: [{username: "kiran057", valid: true}]
        },
        {
          name: "Satyam Chitransh",
          email: "satyam.chitransh.cse21@itbhu.ac.in",
          usernames: [{username: "chitransh_itbhu_6102003", valid: true}]
        },
        {
          name: "Parth Kesarwani",
          email: "parth.kesarwani.cse21@itbhu.ac.in",
          usernames: [{username: "pk_27", valid: true}]
        },
        {
          name: "Soustab Haldar",
          email: "soustab.haldar.cse21@itbhu.ac.in",
          usernames: [{username: "primalphoenix", valid: true}]
        },
        {
          name: "Eshaan Aggarwal",
          email: "eshaan.aggarwal.cse21@itbhu.ac.in",
          usernames: [{username: "eshaan123aggarwal", valid: true}]
        },
        {
          name: "Vaibhav Khater",
          email: "vaibhav.khater.cse21@itbhu.ac.in",
          usernames: [{username: "kingmessi", valid: true}]
        },
        {
          name: "Aaryan Kumar",
          email: "aaryan.kumar.cse21@itbhu.ac.in",
          usernames: [{username: "AKumar666", valid: true}]
        },
        {
          name: "Jayant Pranjal",
          email: "jayant.pranjal.cse21@itbhu.ac.in",
          usernames: [{username: "jayantpranjal", valid: true}]
        },
        {
          name: "Rohith Peddi",
          email: "peddi.rohith.cse21@itbhu.ac.in",
          usernames: [{username: "rohithpeddi7", valid: true}]
        },
        {
          name: "Adrito Mukherjee",
          email: "adrito.mukherjee.cse21@itbhu.ac.in",
          usernames: [{username: "MadRat_0", valid: true}]
        },
        {
          name: "Aryan Patel",
          email: "patel.aryan.eee21@itbhu.ac.in",
          usernames: [{username: "ELI2725", valid: true}]
        },
        {
          name: "Ruchira Naskar",
          email: "ruchira.naskar.cse21@itbhu.ac.in",
          usernames: [{username: "ruchPotterCoder", valid: true}]
        },
        {
          name: "Sahil Chhabra",
          email: "sahil.chhabra.met21@itbhu.ac.in",
          usernames: [{username: "sahil45", valid: true}]
        },
        {
          name: "Saikat Mondal",
          email: "saikat.mondal.cse21@itbhu.ac.in",
          usernames: [{username: "saikatmondal_21", valid: true}]
        },
        {
          name: "Yash Agrawal",
          email: "yash.agrawal.cse21@itbhu.ac.in",
          usernames: [{username: "silentcoder6318", valid: true}]
        },
        {
          name: "Yashwini Bansal",
          email: "yashwini.bansal.cse21@itbhu.ac.in",
          usernames: [{username: "YBansal95", valid: true}]
        },
        {
          name: "Soumyadeep Das",
          email: "soumyadeep.das.cse21@itbhu.ac.in",
          usernames: [{username: "soumyadeep_69", valid: true}]
        },
        {
          name: "Mayank Verma",
          email: "mayank.verma.cse21@itbhu.ac.in",
          usernames: [{username: "mayank.verma.cse21", valid: true}]
        },
        {
          name: "Anshiv Singla",
          email: "anshiv.singla.cse21@itbhu.ac.in",
          usernames: [{username: "sv1shan", valid: true}]
        },
        {
          name: "Kritika Tripathi",
          email: "kritika.tripathi.mec21@itbhu.ac.in",
          usernames: [{username: "Kritika094", valid: true}]
        },
        {
          name: "Archit Kumar",
          email: "archit.kumar.cse21@itbhu.ac.in",
          usernames: [{username: "itz_archit", valid: true}]
        },
        {
          name: "Bhav Khurana",
          email: "bhav.khurana.cse21@itbhu.ac.in",
          usernames: [{username: "bhav_khurana", valid: true}]
        },
        {
          name: "Manmeet Muskan",
          email: "manmeet.muskan.cse21@itbhu.ac.in",
          usernames: [{username: "manmeet.muskan.cse21", valid: true}]
        },
        {
          name: "Ujjawal Modi",
          email: "ujjawal.modi.cse21@itbhu.ac.in",
          usernames: [{username: "crzy22", valid: true}]
        },
        {
          name: "Raghav Singh",
          email: "raghav.singh.cse21@itbhu.ac.in",
          usernames: [{username: "hakaishin_3181", valid: true}]
        },
        {
          name: "Abhay Kumar",
          email: "abhay.kumar.cse21@itbhu.ac.in",
          usernames: [{username: "raiden_21", valid: true}]
        },
        {
          name: "Vigneshwaran S",
          email: "s.vigneshwaran.cse21@itbhu.ac.in",
          usernames: [{username: "vigcancode", valid: true}]
        },
        {
          name: "Siddanth Shetty",
          email: "siddanth.shetty.mat21@itbhu.ac.in",
          usernames: [{username: "Siddanth_12", valid: true}]
        },
        {
          name: "Vedika Chandra",
          email: "vedika.chandra.cse21@itbhu.ac.in",
          usernames: [{username: "phoenix_vc", valid: true}]
        },
        {
          name: "Hardik Agrawal",
          email: "hardik.agrawal.cse21@itbhu.ac.in",
          usernames: [{username: "hardik_836", valid: true}]
        },
        {
          name: "Maithri Muralikrishna",
          email: "m.muralikrishna.cse21@itbhu.ac.in",
          usernames: [{username: "mai_3", valid: true}]
        },
        {
          name: "Shubham Yadav",
          email: "shubham.yadav.cse21@itbhu.ac.in",
          usernames: [{username: "uewbv", valid: true}]
        },
        {
          name: "Rajat Shukla",
          email: "rajat.shukla.ece21@itbhu.ac.in",
          usernames: [{username: "rajat77shukla", valid: true}]
        },
        {
          name: "Anusha Mahajan",
          email: "anusha.mahajan.ece21@itbhu.ac.in",
          usernames: [{username: "nush.mahajan", valid: true}]
        },
        {
          name: "Yash Babel",
          email: "yash.babel.cse21@itbhu.ac.in",
          usernames: [{username: "yashbabel4", valid: true}]
        },
        {
          name: "Jatin Garg",
          email: "jatin.garg.cse19@itbhu.ac.in",
          usernames: [{username: "rivalq", valid: true}]
        },
        {
          name: "Mridul Ramakrishnan",
          email: "mridul.ramakrishnan.mat21@itbhu.ac.in",
          usernames: [{username: "mridulr2003", valid: true}]
        },
        {
          name: "Sarthak Vishwakarma",
          email: "sarthak.vishwakarma.eee21@itbhu.ac.in",
          usernames: [{username: "Sarthak_324", valid: true}]
        },
        {
          name: "Shailesh Agarwal",
          email: "shailesh.agarwal.eee21@itbhu.ac.in",
          usernames: [{username: "shailesh_2583", valid: true}]
        },
        {
          name: "Manmohan Shrivastava",
          email: "manmohan.shrivastava.eee21@itbhu.ac.in",
          usernames: [{username: "EyeStrain11", valid: true}]
        },
        {
          name: "Mayank Rampuriya",
          email: "mayank.rampuriya.eee21@itbhu.ac.in",
          usernames: [{username: "Mayank_Rampuriya", valid: true}]
        },
        {
          name: "Sachin Kumar Gupta",
          email: "sachinkumar.gupta.cse21@itbhu.ac.in",
          usernames: [{username: "Dracarys_7", valid: true}]
        },
        {
          name: "Prakhar Singh",
          email: "sprakhar.janardan.eee21@itbhu.ac.in",
          usernames: [{username: "pjs21703", valid: true}]
        },
        {
          name: "Yuktam Singh",
          email: "yuktam.singh.eee21@itbhu.ac.in",
          usernames: [{username: "Yuktam", valid: true}]
        },
        {
          name: "Harsh Rai",
          email: "harsh.rai.eee21@itbhu.ac.in",
          usernames: [{username: "Harsh_Rai", valid: true}]
        },
        {
          name: "Shivam Gupta",
          email: "shivam.gupta.ece21@itbhu.ac.in",
          usernames: [{username: "dhirack", valid: true}]
        },
        {
          name: "Amit Mishra",
          email: "amit.mishra.eee21@itbhu.ac.in",
          usernames: [{username: "kev_2017_____", valid: true}]
        },
        {
          name: "Md Danish Ansari",
          email: "mddanish.ansari.mat21@itbhu.ac.in",
          usernames: [{username: "danish_droid", valid: true}]
        },
        {
          name: "Ansh Chaudhary",
          email: "ansh.chaudhary.mat21@itbhu.ac.in",
          usernames: [{username: "anshchaudhary", valid: true}]
        },
        {
          name: "Madhav Bansal",
          email: "madhav.bansal.mat21@itbhu.ac.in",
          usernames: [{username: "madhav_23", valid: true}]
        },
        {
          name: "Akshil Ahuja",
          email: "akshil.ahuja.mat21@itbhu.ac.in",
          usernames: [{username: "akshil_ahuja", valid: true}]
        },
        {
          name: "Majjiga Deepak Sai",
          email: "majjiga.deepaksai.ece21@itbhu.ac.in",
          usernames: [{username: "Deepaksai", valid: true}]
        },
        {
          name: "Sheel Ranjan Bajpai",
          email: "sheelranjan.bajpai.mat21@itbhu.ac.in",
          usernames: [{username: "GamerSheel", valid: true}]
        },
        {
          name: "Dheeraj Yadav",
          email: "dheeraj.yadav.cse21@itbhu.ac.in",
          usernames: [{username: "dheeraj_yadav", valid: true}]
        },
        {
          name: "Abhishek",
          email: "abhishek.student.eee21@itbhu.ac.in",
          usernames: [{username: "_polarbear", valid: true}]
        },
        {
          name: "Mukesh kumar",
          email: "mukesh.kumar.mat21@itbhu.ac.in",
          usernames: [{username: "mukeshkumar032004", valid: true}]
        },
        {
          name: "Harsh Shrivastava",
          email: "harsh.shrivastava.eee21@itbhu.ac.in",
          usernames: [{username: "Trying_To_Do_Better", valid: true}]
        },
        {
          name: "Vikash Kumar",
          email: "vikash.kumar.mat21@itbhu.ac.in",
          usernames: [{username: "uniquevikash1", valid: true}]
        },
        {
          name: "Nitish Kumar",
          email: "nitish.kumar.mat21@itbhu.ac.in",
          usernames: [{username: "Nitish0666", valid: true}]
        },
        {
          name: "Rohan",
          email: "rohan.student.mat21@itbhu.ac.in",
          usernames: [{username: "Rohan217", valid: true}]
        },
        {
          name: "Kanishk Srivastava",
          email: "kanishk.srivastava.eee21@itbhu.ac.in",
          usernames: [{username: "REDPILLED_Neo", valid: true}]
        },
        {
          name: "Avinash Ranjan",
          email: "avinash.ranjan.cse21@itbhu.ac.in",
          usernames: [{username: "avishaan", valid: true}]
        },
        {
          name: "Ayushi Mittal",
          email: "ayushi.mittal.mat21@itbhu.ac.in",
          usernames: [{username: "ayushi.mm", valid: true}]
        },
        {
          name: "Ojasva Gupta",
          email: "ojasva.gupta.mat21@itbhu.ac.in",
          usernames: [{username: "og_phoenix", valid: true}]
        },
        {
          name: "Aritra Datta",
          email: "aritra.datta.met21@itbhu.ac.in",
          usernames: [{username: "Aritra_Datta", valid: true}]
        },
        {
          name: "Harmanjot Singh",
          email: "harmanjot.singh.cse21@itbhu.ac.in",
          usernames: [{username: "harman_69", valid: true}]
        },
        {
          name: "Nikhil Agarwal",
          email: "nikhil.agarwal.ece21@itbhu.ac.in",
          usernames: [{username: "nik_agarwal12", valid: true}]
        },
        {
          name: "Saket Kumar Singh",
          email: "saket.kumarsingh.ece21@itbhu.ac.in",
          usernames: [{username: "pika_coder", valid: true}]
        },
        {
          name: "Ipil Besra",
          email: "ipil.besra.ece21@itbhu.ac.in",
          usernames: [{username: "Ipil", valid: true}]
        },
        {
          name: "Lalit Singh",
          email: "lalit.singh.ece21@itbhu.ac.in",
          usernames: [{username: "lalit9389", valid: true}]
        },
        {
          name: "Ayush Singh",
          email: "ayush.singh.ece21@it.bhu.ac.in",
          usernames: [{username: "ayush.singh.ece21", valid: true}]
        },
        {
          name: "Neeraj Saketh Vamsi Pitla",
          email: "pneeraj.sakethvamsi.ece21@itbhu.ac.in",
          usernames: [{username: "neeraj_036", valid: true}]
        },
        {
          name: "Gargi Nigam",
          email: "gargi.nigam.ece21@itbhu.ac.in",
          usernames: [{username: "Gargi21", valid: true}]
        },
        {
          name: "Prasoon Sahay",
          email: "prasoon.sahay.ece21@itbhu.ac.in",
          usernames: [{username: "Prasoon2016", valid: true}]
        },
        {
          name: "Giridhar Madhav",
          email: "ygiridhar.madhav.ece21@itbhu.ac.in",
          usernames: [{username: "giridhar_4009", valid: true}]
        },
        {
          name: "Abhishek Kumar",
          email: "abhishek.ukumar.ece21@itbhu.ac.in",
          usernames: [{username: "19104838", valid: true}]
        },
        {
          name: "Tarun Siddharth",
          email: "starun.siddharth.ece21@itbhu.ac.in",
          usernames: [{username: "SIDD1123", valid: true}]
        },
        {
          name: "Md Athar",
          email: "md.athar.ece21@itbhu.ac.in",
          usernames: [{username: "MdAthar", valid: true}]
        },
        {
          name: "Shiv Bhushan Singh",
          email: "shivbhushan.singh.apd21@itbhu.ac.in",
          usernames: [{username: "Shivbhushan", valid: true}]
        },
        {
          name: "Priyanshu",
          email: "priyanshu.student.ece21@itbhu.ac.in",
          usernames: [{username: "paloxzzz", valid: true}]
        },
        {
          name: "Abhishek Anand",
          email: "abhishek.anand.ece21@itbhu.ac.in",
          usernames: [{username: "Iamabhianand", valid: true}]
        },
        {
          name: "Tushar Karale",
          email: "karaletushar.bharat.ece21@itbhu.ac.in",
          usernames: [{username: "tsar_10", valid: true}]
        },
        {
          name: "Anshu Soni",
          email: "anshu.soni.ece21@itbhu.ac.in",
          usernames: [{username: "Anshu_nyt", valid: true}]
        },
        {
          name: "Satyam Aditya",
          email: "satyam.aditya.eee21@itbhu.ac.in",
          usernames: [{username: "Royal_knight_07", valid: true}]
        },
        {
          name: "Samarth Tankasali",
          email: "samarth.stankasali.ece21@itbhu.ac.in",
          usernames: [{username: "rasbutass", valid: true}]
        },
        {
          name: "Sachin Kumar",
          email: "sachin.kumar.eee21@itbhu.ac.in",
          usernames: [{username: "Sachin2021", valid: true}]
        },
        {
          name: "Palti Sumasri",
          email: "palti.sumasri.ece21@itbhu.ac.in",
          usernames: [{username: "Suma_27", valid: true}]
        },
        {
          name: "Arnav Goyal",
          email: "arnav.goyal.ece21@itbhu.ac.in",
          usernames: [{username: "Pikachu_11", valid: true}]
        },
        {
          name: "Jaya Kedia",
          email: "jaya.kedia.met21@itbhu.ac.in",
          usernames: [{username: "CheekJK", valid: true}]
        },
        {
          name: "Madhavendra Rathore",
          email: "madhavendra.srathore.cse21@itbhu.ac.in",
          usernames: [{username: "drath10", valid: true}]
        },
        {
          name: "Vaibhav Bansal",
          email: "vaibhav.bansal.ece21@itbhu.ac.in",
          usernames: [{username: "SoloWarrior1", valid: true}]
        },
        {
          name: "Anant Jain",
          email: "anant.jain.ece21@itbhu.ac.in",
          usernames: [{username: "anant_jain_01", valid: true}]
        },
        {
          name: "Archit Pattanaik",
          email: "archit.pattanaik.ece21@itbhu.ac.in",
          usernames: [{username: "kakashi_2003", valid: true}]
        },
        {
          name: "Priti Kumari",
          email: "priti.kumari.eee21@itbhu.ac.in",
          usernames: [{username: "priti2002bwn", valid: true}]
        },
        {
          name: "Aditya Singh",
          email: "aditya.singh.cse21@itbhu.ac.in",
          usernames: [{username: "863aditya", valid: true}]
        },
        {
          name: "Divyansh Sahu",
          email: "divyansh.sahu.mat21@itbhu.ac.in",
          usernames: [{username: "divyansh_08", valid: true}]
        },
        {
          name: "Aditya Aryaman Das",
          email: "aditya.aryamandas.mec21@itbhu.ac.in",
          usernames: [{username: "GraceousX", valid: true}]
        },
        {
          name: "Abhijeet Kumar",
          email: "abhijeet.kumar.cse21@itbhu.ac.in",
          usernames: [{username: "cr1515", valid: true}]
        }
      ]
    info.forEach(entry => {
        const info = entry.email.split("@")[0].split('.').pop()!
        User.create({
            ...entry,
            dept: info.substring(0, 3),
            adm_yr: info.substring(3),
        })
    })
}

migrate()

const dummy = 5

export default dummy