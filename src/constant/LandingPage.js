export const navBar = [
    {   
        id: 1,
        comapnayFirstName : "my",
        comapnayLastName : "Smuk",
    },
    {   
        id: 2,
        content :[
            {
                fid:1,
                title:"Home",
                url:"/",
            },
            {
                fid:2,
                title:"About",
                url:"/about",
            },
            {
                fid:3,
                title:"Contact",
                url:"/contact",
            },
            
        ]
       
    },
    {   
        id: 3,
        btn :[
            {
                fid:1,
                title:"Join Us +",
                url:"/join-us",
            },
            {
                fid:2,
                title:"Sign In",
                url:"/auth",
            },
           
            
        ]
      
    }
]

export const HeroSection = [
    {
        id: 1,
        title: "Effortless Event Planning at Your Fingertips",
        para : "Say goodbye to the stress of event planning. With just a few clicks, book the perfect date for your next big event—whether it's a wedding, party, or corporate gathering. Simplify your planning and let us handle the rest!"
    },
    {
        id: 2,
        feature : [
            {
                fid : 1,
                title : "Instant Booking",
                para : "Select your date and confirm with just a few clicks—no hassle, no delays. "
            },
            {
                fid : 2,
                title : "Personalized Experience",
                para : "Tailored event planning to match your unique needs, ensuring every detail is perfect "
            },
            {
                fid : 3,
                title : "All Events Covered",
                para : "From weddings to corporate gatherings, we handle all types of events effortlessly."
            }
        ]
        
    }
]
export const footer = [
    {
        id: 1 ,
        title : "mySmuk",
        content : "@2025 mySmuk Limited"
    },
    {
        id: 2 ,
        part : [
            {
                pid: 1 ,
                Company : {
                    title : "Company",
                    aboutUs : "About us",
                    legal : "Legal",
                    terms : "Terms & Condition",
                    privacy : "Privacy"
                }
            },
            {
                pid: 2 ,
                Contact : {
                    title : "Contact Us", 
                    help : "Help & Support",
                    partner : "Partner with us",
                    Faq : "FAQ",
                  
                },
                
            },
            {
                pid: 3 ,
                Career : {
                    title : "Career", 
                    job : "Jobs",
                    life : "Life At mySmuk",
                    
                },
        
            },
            {
                pid: 4 ,
                Social : {
                    title : "Social Links",  
                }
        
            }
        ]
    }
    
       
]

export const errorPage = {
    heading1:"OOPS! Page Not Found",
    code : "404",
    heading2:"We Are Sorry But The Page You Requested Was Not Found",
 
}