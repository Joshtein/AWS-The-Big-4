import axios from 'axios'

//User Interface API

// Post User Data
/* 
format dataSent
{
  "userID": event.uuid,
  "name": event.name,
  "email": event.email,
}
*/
export const userCreate = async(data)=>{
    try {
        const res= await axios.post("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/userinterface/usercreate",data);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

//Get User Data
export const userGet = async(id)=>{
    try{
        const res= await axios.put("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/userinterface/userget",id);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

//User delete remove recomendation
/*
format dataSent
{
    "uuid": "123456",
    "removedRec": {
        "univName": "Institut Teknologi Bandung",
        "majorName": "Teknik Elektro"
    }
}
format return
[
    {
      "univName": "UI",
      "majorName": "Teknik Elektro"
    },
    {
      "univName": "ITB",
      "majorName": "Teknik Elektro"
    },
    {
      "univName": "UGM",
      "majorName": "Teknik Elektro"
    }
]
*/
export const userDeleteRemoveRecommendation = async(dataSent)=>{
    try{
        const res= await axios.put("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/userinterface/userdeleteremoverecommendation",dataSent);
        const list = [...res.data.body];
        return list;
    } catch (error) {
        console.error(error);
    }
}

//User delete wishlist
/*
format dataSent
    {
        "uuid": "123456",
        "removedRec": {
            "univName": "Institut Teknologi Bandung",
            "majorName": "Teknik Elektro"
        }
    }
format return
[
    {
      "univName": "UI",
      "majorName": "Teknik Elektro"
    },
    {
      "univName": "ITB",
      "majorName": "Teknik Elektro"
    },
    {
      "univName": "UGM",
      "majorName": "Teknik Elektro"
    }
]
*/
export const userDeleteWishlist = async(dataSent)=>{
    try{
        const res= await axios.put("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/userinterface/userdeletewishlist",dataSent);
        const list = [...res.data.body];
        return list;
    } catch (error) {
        console.error(error);
    }
}

//User update
/*
format dataSent
e.g. for major group "Saintek"
    {
        "uuid": "123456",
        "majorGroup": "Saintek",
        "budget": 100000000,
        "subjects": [{
            "name": "Matematika IPA",
            "score": 85
        },{
            "name": "Fisika",
            "score": 80
        },{
            "name": "Kimia",
            "score": 90
        },{
            "name": "Biologi",
            "score": 93
        },{
            "name": "Bahasa Inggris",
            "score": 92
        },{
            "name": "Bahasa Indonesia",
            "score": 85
        }]
    }
    
    e.g. for major group "Soshum"
    {
        "uuid": "123456",
        "majorGroup": "Soshum",
        "budget": 100000000,
        "subjects": [{
            "name": "Geografi",
            "score": 85
        },{
            "name": "Sejarah Minat",
            "score": 80
        },{
            "name": "Sosiologi",
            "score": 90
        },{
            "name": "Ekonomi",
            "score": 93
        },{
            "name": "Bahasa Inggris",
            "score": 92
        },{
            "name": "Bahasa Indonesia",
            "score": 85
        }]
    }
format return
body: {
    "majorGroup": "Saintek",
    "subjects": [
      {
        "name": "Matematika IPA",
        "score": 85
      },
      {
        "name": "Fisika",
        "score": 80
      },
      {
        "name": "Kimia",
        "score": 90
      },
      {
        "name": "Biologi",
        "score": 93
      },
      {
        "name": "Bahasa Inggris",
        "score": 92
      },
      {
        "name": "Bahasa Indonesia",
        "score": 85
      }
    ],
    "budget": 100000000
  }
*/
export const userUpdate = async(dataSent)=>{
    try{
        const res= await axios.put("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/userinterface/userupdate",dataSent);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

//User update remove recommendation
/*
format dataSent
    {
        "uuid": "123456",
        "removedRec": {
            "univName": "Institut Teknologi Bandung",
            "majorName": "Teknik Elektro"
        }
    }
format return
[
    {
      "univName": "UI",
      "majorName": "Teknik Elektro"
    },
    {
      "univName": "ITB",
      "majorName": "Teknik Elektro"
    },
    {
      "univName": "UGM",
      "majorName": "Teknik Elektro"
    }
]
*/
export const userUpdateRemoveRecommendation = async(dataSent)=>{
    try{
        const res= await axios.put("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/userinterface/userupdateremoverecommendation",dataSent);
        const list = [...res.data.body];
        return list;
    } catch (error) {
        console.error(error);
    }
}

//User update wishlist
/*
format dataSent
    {
        "uuid": "123456",
        "removedRec": {
            "univName": "Institut Teknologi Bandung",
            "majorName": "Teknik Elektro"
        }
    }
format return
[
    {
      "univName": "UI",
      "majorName": "Teknik Elektro"
    },
    {
      "univName": "ITB",
      "majorName": "Teknik Elektro"
    },
    {
      "univName": "UGM",
      "majorName": "Teknik Elektro"
    }
]
*/
export const userUpdateWishlist = async(dataSent)=>{
    try{
        const res= await axios.put("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/userinterface/userupdatewishlist",dataSent);
        const list = [...res.data.body];
        return list;
    } catch (error) {
        console.error(error);
    }
}

//Predict recommendation API

//Predict Case 1
/*
format dataSent
{
  "userID": "d2256497003a4798b4968ff70b1c68fe",
  "major": "Teknik Elektro",
  "universityName": "ITB",
  "budget": 15000000
}
format return
 {
    "name": "ITB",
    "major": "Teknik Elektro",
    "accreditation": "A",
    "grade": "Budget is not enough, need 2500000 more.",
    "univDesc": "Institut Teknologi Bandung (ITB) merupakan sekolah tinggi teknik pertama di Indonesia yang didirikan pada tanggal 2 Maret 1959 di Jawa Barat yang mengemban misi pengabdian ilmu pengetahuan dan teknologi untuk memajukan Indonesia.",
    "majorDesc": "Program Studi Teknik Elektro menyelenggarakan perkuliahan untuk program S1 Reguler dengan dua program studi yaitu Teknik Elektro  dan Teknik Komputer. Program Studi Teknik Elektro menekankan pengembangan Sumber Daya Manusia (SDM) di bidang elektronika, komputer, tenaga listrik, sistem kendali dan telekomunikasi. Lulusan dari program studi ini diharapkan dapat menjadi tenaga ahli Teknik Elektro yang berkualitas dan memiliki kemampuan untuk mengembangkan pengetahuan dan melakukan penelitian secara mandiri serta mampu bekerja dan menerapkannya pada industri yang sesuai."
}
*/
export const predictCase1 = async(dataSent)=>{
    try{
        const res= await axios.put("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/predictrecomendation/predictcase1",dataSent);
        return res.data.body;
    } catch (error) {
        console.error(error);
    }
}

//Predict Case 2
/*
format dataSent
{
  "userID": "d2256497003a4798b4968ff70b1c68fe",
  "major": "Teknik Elektro",
  "budget": 15000000
}
format return
[
    {
        "name": "UI",
        "accreditation": "A",
        "grade": "C",
        "popularityPoint": 10
    },
    {
        "name": "ITS",
        "accreditation": "B",
        "grade": "C",
        "popularityPoint": 5
    }
] 
*/
export const predictCase2 = async(dataSent)=>{
    try{
        const res= await axios.put("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/predictrecomendation/predictcase2",dataSent);
        const list = [...res.data.body];
        return list;
    } catch (error) {
        console.error(error);
    }
}

//Get list of majors in a major group
/*
format dataSent
{
  "majorGroup": "Saintek"
}
format return
[
    {
      "majorGroup": "Saintek",
      "majorName": "Teknik Industri"
    },
    {
      "majorGroup": "Saintek",
      "majorName": "Teknik Perminyakan"
    },
    {
      "majorGroup": "Saintek",
      "majorName": "Arsitektur"
    },
    {
      "majorGroup": "Saintek",
      "majorName": "Teknik Fisika"
    },
    {
      "majorGroup": "Saintek",
      "majorName": "Teknik Elektro"
    },
    {
      "majorGroup": "Saintek",
      "majorName": "Teknik Nuklir"
    },
    {
      "majorGroup": "Saintek",
      "majorName": "Farmasi"
    },
    {
      "majorGroup": "Saintek",
      "majorName": "Biologi"
    },
    {
      "majorGroup": "Saintek",
      "majorName": "Teknik Geodesi"
    },
    {
      "majorGroup": "Saintek",
      "majorName": "Kedokteran"
    },
    {
      "majorGroup": "Saintek",
      "majorName": "Matematika"
    },
    {
      "majorGroup": "Saintek",
      "majorName": "Teknik Sipil"
    },
    {
      "majorGroup": "Saintek",
      "majorName": "Geofisika"
    }
]
*/
export const getListOfMajorsInMajorGroup = async(dataSent)=>{
    try{
        const res= await axios.put("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/predictrecomendation/getlistofmajorsinmajorgroup",dataSent);
        const list = [...res.data.body];
        return list;
    } catch (error) {
        console.error(error);
    }
}

//Get List of Universities
/*
format return
[
    {
      "majorGroup": [
        {
          "name": "Saintek",
          "majors": []
        },
        {
          "name": "Soshum",
          "majors": []
        }
      ],
      "universityName": "UNPAD"
    },
    {
      "majorGroup": [
        {
          "name": "Saintek",
          "majors": []
        },
        {
          "name": "Soshum",
          "majors": []
        }
      ],
      "universityName": "UNSOED"
    },
    {
      "majorGroup": [
        {
          "majors": [
            {
              "score": 83,
              "accreditation": "A",
              "majorName": "Teknik Elektro",
              "subjects": [
                {
                  "name": "matematikaMinat",
                  "weight": 5
                },
                {
                  "name": "fisika",
                  "weight": 5
                },
                {
                  "name": "kimia",
                  "weight": 3
                },
                {
                  "name": "biologi",
                  "weight": 2
                },
                {
                  "name": "bahasaInggris",
                  "weight": 3
                },
                {
                  "name": "bahasaIIndonesia",
                  "weight": 3
                }
              ],
              "budget": 7000000
            },
            {
              "score": 85,
              "accreditation": "A",
              "majorName": "Matematika",
              "subjects": [
                {
                  "name": "Matematika IPA",
                  "weight": 6
                },
                {
                  "name": "Fisika",
                  "weight": 3
                },
                {
                  "name": "Kimia",
                  "weight": 1
                },
                {
                  "name": "Biologi",
                  "weight": 1
                },
                {
                  "name": "Bahasa Inggris",
                  "weight": 5
                },
                {
                  "name": "Bahasa Indonesia",
                  "weight": 5
                }
              ],
              "budget": 7000000
            },
            {
              "score": 90,
              "accreditation": "A",
              "majorName": "Kedokteran",
              "subjects": [
                {
                  "name": "Matematika IPA",
                  "weight": 3
                },
                {
                  "name": "Fisika",
                  "weight": 1
                },
                {
                  "name": "Kimia",
                  "weight": 4
                },
                {
                  "name": "Biologi",
                  "weight": 7
                },
                {
                  "name": "Bahasa Inggris",
                  "weight": 3
                },
                {
                  "name": "Bahasa Indonesia",
                  "weight": 3
                }
              ],
              "budget": 7000000
            },
            {
              "score": 87,
              "accreditation": "A",
              "majorName": "Teknik Kimia",
              "budget": 7000000,
              "subjects": [
                {
                  "name": "Matematika IPA",
                  "weight": 5
                },
                {
                  "name": "Fisika",
                  "weight": 5
                },
                {
                  "name": "Kimia",
                  "weight": 5
                },
                {
                  "name": "Biologi",
                  "weight": 2
                },
                {
                  "name": "Bahasa Inggris",
                  "weight": 2
                },
                {
                  "name": "Bahasa Indonesia",
                  "weight": 2
                }
              ]
            }
          ],
          "name": "Saintek"
        },
        {
          "name": "Soshum",
          "majors": [
            {
              "score": 77,
              "accreditation": "A",
              "majorName": "Sastra Daerah Sastra Jawa",
              "subjects": [
                {
                  "name": "geografi",
                  "weight": 4
                },
                {
                  "name": "sejarahMinat",
                  "weight": 3
                },
                {
                  "name": "sosiologi",
                  "weight": 6
                },
                {
                  "name": "ekonomi",
                  "weight": 1
                },
                {
                  "name": "bahasaInggris",
                  "weight": 1
                },
                {
                  "name": "bahasaIIndonesia",
                  "weight": 6
                }
              ],
              "budget": 10000000
            },
            {
              "score": 77,
              "accreditation": "A",
              "majorName": "Sastra Rusia",
              "subjects": [
                {
                  "name": "Geografi",
                  "weight": 3
                },
                {
                  "name": "Sejarah Minat",
                  "weight": 4
                },
                {
                  "name": "Sosiologi",
                  "weight": 3
                },
                {
                  "name": "Ekonomi",
                  "weight": 1
                },
                {
                  "name": "Bahasa Inggris",
                  "weight": 5
                },
                {
                  "name": "Bahasa Indonesia",
                  "weight": 5
                }
              ],
              "budget": 10000000
            },
            {
              "score": 79,
              "accreditation": "A",
              "majorName": "Antropologi Sosial",
              "subjects": [
                {
                  "name": "Geografi",
                  "weight": 2
                },
                {
                  "name": "Sejarah Minat",
                  "weight": 6
                },
                {
                  "name": "Sosiologi",
                  "weight": 6
                },
                {
                  "name": "Ekonomi",
                  "weight": 1
                },
                {
                  "name": "Bahasa Inggris",
                  "weight": 1
                },
                {
                  "name": "Bahasa Indonesia",
                  "weight": 5
                }
              ],
              "budget": 10000000
            },
            {
              "score": 79,
              "accreditation": "A",
              "majorName": "Ilmu Filsafat",
              "subjects": [
                {
                  "name": "Geografi",
                  "weight": 1
                },
                {
                  "name": "Sejarah Minat",
                  "weight": 6
                },
                {
                  "name": "Sosiologi",
                  "weight": 6
                },
                {
                  "name": "Ekonomi",
                  "weight": 1
                },
                {
                  "name": "Bahasa Inggris",
                  "weight": 1
                },
                {
                  "name": "Bahasa Indonesia",
                  "weight": 6
                }
              ],
              "budget": 10000000
            },
            {
              "score": 79,
              "accreditation": "A",
              "majorName": "Sastra Belanda",
              "subjects": [
                {
                  "name": "Geografi",
                  "weight": 3
                },
                {
                  "name": "Sejarah Minat",
                  "weight": 4
                },
                {
                  "name": "Sosiologi",
                  "weight": 3
                },
                {
                  "name": "Ekonomi",
                  "weight": 1
                },
                {
                  "name": "Bahasa Inggris",
                  "weight": 5
                },
                {
                  "name": "Bahasa Indonesia",
                  "weight": 5
                }
              ],
              "budget": 10000000
            }
          ]
        }
      ],
      "universityName": "UI"
    },
    {
      "majorGroup": [ 
        .
        .
        .
        .
*/
export const getListOfUniversities = async()=>{
  try{
      const res= await axios.get("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/predictrecomendation/getlistofuniversities");
      return res.data.body;
  } catch (error) {
      console.error(error);
  }
}



//News Stream API

//Get News
/*
format return
[
        {
            "createdAt": "2021-07-16T19:09:23.511Z",
            "univName": "UI",
            "newsTitle": "test",
            "newsContent": "Starting from the 1st of January 2020 to ..."
        },
        {
            "createdAt": "2021-07-16T18:54:42.244Z",
            "univName": "ITB",
            "newsTitle": "test 2",
            "newsContent": "Starting from the 1st of January 2020 to ..."
        }
]
*/
export const getNews = async()=>{
    try{
        const res= await axios.get("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/newsstream/getnews");
        const list = [...res.data.body];
        return list;
    } catch (error) {
        console.error(error);
    }
}

//News Create
/*
format dataSent
{
  "newsTitle": "test 2",
  "newsContent": "Starting from the 1st of January 2020 to ...",
  "univName": "ITB"
}
*/
export const newsCreate = async(dataSent)=>{
    try{
        const res= await axios.post("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/newsstream/newscreate", dataSent);
        const list = [...res.data.body];
        return list;
    } catch (error) {
        console.error(error);
    }
}

//University Interface API

//Get Univ Data
/*
format dataSent
{
  "universityName": "ITB"
}
format return
{
    "majorGroup": [
      {
        "name": "Saintek",
        "majors": [
          {
            "score": 88,
            "accreditation": "A",
            "majorName": "Teknik Elektro",
            "budget": 12500000,
            "subjects": [
              {
                "name": "Matematika IPA",
                "weight": 5
              },
              {
                "name": "Fisika",
                "weight": 5
              },
              {
                "name": "Kimia",
                "weight": 3
              },
              {
                "name": "Biologi",
                "weight": 2
              },
              {
                "name": "Bahasa Inggris",
                "weight": 2
              },
              {
                "name": "Bahasa Indonesia",
                "weight": 4
              }
            ],
            "desc": "Program Studi Teknik Elektro menyelenggarakan perkuliahan untuk program S1 Reguler dengan dua program studi yaitu Teknik Elektro  dan Teknik Komputer. Program Studi Teknik Elektro menekankan pengembangan Sumber Daya Manusia (SDM) di bidang elektronika, komputer, tenaga listrik, sistem kendali dan telekomunikasi. Lulusan dari program studi ini diharapkan dapat menjadi tenaga ahli Teknik Elektro yang berkualitas dan memiliki kemampuan untuk mengembangkan pengetahuan dan melakukan penelitian secara mandiri serta mampu bekerja dan menerapkannya pada industri yang sesuai."
          },
          {
            "score": 87,
            "accreditation": "A",
            "majorName": "Farmasi",
            "budget": 12500000,
            "subjects": [
              {
                "name": "Matematika IPA",
                "weight": 3
              },
              {
                "name": "Fisika",
                "weight": 2
              },
              {
                "name": "Kimia",
                "weight": 6
              },
              {
                "name": "Biologi",
                "weight": 6
              },
              {
                "name": "Bahasa Inggris",
                "weight": 2
              },
              {
                "name": "Bahasa Indonesia",
                "weight": 2
              }
            ]
          },
          {
            "score": 86,
            "accreditation": "A",
            "majorName": "Geofisika",
            "budget": 12500000,
            "subjects": [
              {
                "name": "Matematika IPA",
                "weight": 5
              },
              {
                "name": "Fisika",
                "weight": 5
              },
              {
                "name": "Kimia",
                "weight": 3
              },
              {
                "name": "Biologi",
                "weight": 2
              },
              {
                "name": "Bahasa Inggris",
                "weight": 3
              },
              {
                "name": "Bahasa Indonesia",
                "weight": 3
              }
            ]
          },
          {
            "score": 86,
            "accreditation": "A",
            "majorName": "Teknik Sipil",
            "budget": 12500000,
            "subjects": [
              {
                "name": "Matematika IPA",
                "weight": 5
              },
              {
                "name": "Fisika",
                "weight": 5
              },
              {
                "name": "Kimia",
                "weight": 2
              },
              {
                "name": "Biologi",
                "weight": 1
              },
              {
                "name": "Bahasa Inggris",
                "weight": 4
              },
              {
                "name": "Bahasa Indonesia",
                "weight": 4
              }
            ]
          },
          {
            "score": 88,
            "accreditation": "A",
            "majorName": "Teknik Perminyakan",
            "budget": 12500000,
            "subjects": [
              {
                "name": "Matematika IPA",
                "weight": 5
              },
              {
                "name": "Fisika",
                "weight": 5
              },
              {
                "name": "Kimia",
                "weight": 4
              },
              {
                "name": "Biologi",
                "weight": 1
              },
              {
                "name": "Bahasa Inggris",
                "weight": 3
              },
              {
                "name": "Bahasa Indonesia",
                "weight": 3
              }
            ]
          }
        ]
      },
      {
        "name": "Soshum",
        "majors": [
          {
            "score": 83,
            "accreditation": "A",
            "majorName": "Manajemen",
            "budget": 20000000,
            "subjects": [
              {
                "name": "Geografi",
                "weight": 2
              },
              {
                "name": "Sejarah Minat",
                "weight": 2
              },
              {
                "name": "Sosiologi",
                "weight": 2
              },
              {
                "name": "Ekonomi",
                "weight": 5
              },
              {
                "name": "Bahasa Inggris",
                "weight": 5
              },
              {
                "name": "Bahasa Indonesia",
                "weight": 5
              }
            ]
          }
        ]
      }
    ],
    "desc": "Institut Teknologi Bandung (ITB) merupakan sekolah tinggi teknik pertama di Indonesia yang didirikan pada tanggal 2 Maret 1959 di Jawa Barat yang mengemban misi pengabdian ilmu pengetahuan dan teknologi untuk memajukan Indonesia.",
    "universityName": "ITB"
  }
}
*/
export const getUnivData = async(dataSent)=>{
    try{
        const res= await axios.put("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/universityinterface/getunivdata", dataSent);
        return res.data.body;
    } catch (error) {
        console.error(error);
    }
}

//Get Univ Popularity Data
/*
format dataSent
{
  "universityName": "UI"
}
format return
{
    "removedRecCount": 4,
    "universityName": "UI",
    "wishlistCount": 14
}
*/
export const getUnivPopularityData = async(dataSent)=>{
    try{
        const res= await axios.put("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/universityinterface/getunivpopularitydata", dataSent);
        return res.data.body;
    } catch (error) {
        console.error(error);
    }
}

//Update All Univ Major
/*
format dataSent
{
  "universityName": "ITB",
  "majorGroup": [
    {
      "name": "Saintek",
      "majors": [
        {
          "majorName": "Teknik Elektro",
          "budget": 12500000,
          "accreditation": "A",
          "score": 88,
          "subjects": [
            {
              "name": "Matematika IPA",
              "weight": 5
            },
            {
              "name": "Fisika",
              "weight": 5
            },
            {
              "name": "Kimia",
              "weight": 3
            },
            {
              "name": "Biologi",
              "weight": 2
            },
            {
              "name": "Bahasa Inggris",
              "weight": 2
            },
            {
              "name": "Bahasa Indonesia",
              "weight": 4
            }
          ],
          "desc": "Program Studi Teknik Elektro menyelenggarakan perkuliahan untuk program S1 Reguler dengan dua program studi yaitu Teknik Elektro  dan Teknik Komputer. Program Studi Teknik Elektro menekankan pengembangan Sumber Daya Manusia (SDM) di bidang elektronika, komputer, tenaga listrik, sistem kendali dan telekomunikasi. Lulusan dari program studi ini diharapkan dapat menjadi tenaga ahli Teknik Elektro yang berkualitas dan memiliki kemampuan untuk mengembangkan pengetahuan dan melakukan penelitian secara mandiri serta mampu bekerja dan menerapkannya pada industri yang sesuai."
        },
        {
          "majorName": "Farmasi",
          "budget": 12500000,
          "accreditation": "A",
          "score": 87,
          "subjects": [
            {
              "name": "Matematika IPA",
              "weight": 3
            },
            {
              "name": "Fisika",
              "weight": 2
            },
            {
              "name": "Kimia",
              "weight": 6
            },
            {
              "name": "Biologi",
              "weight": 6
            },
            {
              "name": "Bahasa Inggris",
              "weight": 2
            },
            {
              "name": "Bahasa Indonesia",
              "weight": 2
            }
          ]
        },
        {
          "majorName": "Geofisika",
          "budget": 12500000,
          "accreditation": "A",
          "score": 86,
          "subjects": [
            {
              "name": "Matematika IPA",
              "weight": 5
            },
            {
              "name": "Fisika",
              "weight": 5
            },
            {
              "name": "Kimia",
              "weight": 3
            },
            {
              "name": "Biologi",
              "weight": 2
            },
            {
              "name": "Bahasa Inggris",
              "weight": 3
            },
            {
              "name": "Bahasa Indonesia",
              "weight": 3
            }
          ]
        },
        {
          "majorName": "Teknik Sipil",
          "budget": 12500000,
          "accreditation": "A",
          "score": 86,
          "subjects": [
            {
              "name": "Matematika IPA",
              "weight": 5
            },
            {
              "name": "Fisika",
              "weight": 5
            },
            {
              "name": "Kimia",
              "weight": 2
            },
            {
              "name": "Biologi",
              "weight": 1
            },
            {
              "name": "Bahasa Inggris",
              "weight": 4
            },
            {
              "name": "Bahasa Indonesia",
              "weight": 4
            }
          ]
        },
        {
          "majorName": "Teknik Perminyakan",
          "budget": 12500000,
          "accreditation": "A",
          "score": 88,
          "subjects": [
            {
              "name": "Matematika IPA",
              "weight": 5
            },
            {
              "name": "Fisika",
              "weight": 5
            },
            {
              "name": "Kimia",
              "weight": 4
            },
            {
              "name": "Biologi",
              "weight": 1
            },
            {
              "name": "Bahasa Inggris",
              "weight": 3
            },
            {
              "name": "Bahasa Indonesia",
              "weight": 3
            }
          ]
        }
      ]
    },
    {
      "name": "Soshum",
      "majors": [
        {
          "majorName": "Manajemen",
          "budget": 20000000,
          "accreditation": "A",
          "score": 83,
          "subjects": [
            {
              "name": "Geografi",
              "weight": 2
            },
            {
              "name": "Sejarah Minat",
              "weight": 2
            },
            {
              "name": "Sosiologi",
              "weight": 2
            },
            {
              "name": "Ekonomi",
              "weight": 5
            },
            {
              "name": "Bahasa Inggris",
              "weight": 5
            },
            {
              "name": "Bahasa Indonesia",
              "weight": 5
            }
          ]
        }
      ]
    }
  ]
}
format return
    `Majors of ${university.universityName} updated`
*/
export const updateAllUnivMajor = async(dataSent)=>{
    try{
        const res= await axios.put("https://bxsg39yshk.execute-api.us-east-1.amazonaws.com/test/universityinterface/updateallunivmajor", dataSent);
        return res.data.body;
    } catch (error) {
        console.error(error);
    }
}