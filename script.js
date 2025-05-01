/*
Configuration
------------------------
If something doesn't work please contact me on discord (aggelosp2424#6727).
*/

const config = {
    serverInfo: {
        serverLogoImageFileName: "logo.png", /*This is a file name for logo in /images/ (If you upload new logo with other name, you must change this value)*/
        serverName: "Souvlaki SMP Minecraft", /*Server name*/
        serverName2: "Souvlaki SMP", /*Server IP (if you want to add online user counter, you must have true the enable-status and enable-query of server.properties)*/
        serverIp: "Souvlaki SMP", /*Server IP (if you want to add online user counter, you must have true the enable-status and enable-query of server.properties)*/
        discordServerID: "1011960565507293295" /*Your server ID (if you want to add online user counter, you must have enabled Discord server widget)*/
    },

    /*Admin-Team
    ------------
    If you want to create new group, you must add this structure to adminTeamPage:
    <nameOfGroup>: [
        {
            inGameName: "Astronavta",
            rank: "Owner",
            skinUrlOrPathToFile: "",
            rankColor: ""
        },
    ]
    then you must add this group with same name to atGroupsDefaultColors and set the color you want for the group.
    You can also set a special color for a specific user, just put it in the rankColor of that user.

    All skins for original players are generate automaticaly. If you want to add skins to warez players, yout must add url for skin to skinUrlOrPathToFile
        {
            inGameName: "Astronavta",  <--- In-Game name
            rank: "Owner",  <-- rank
            skinUrlOrPathToFile: "",  <-- url or file path for skin image for warez players (if you have original minecraft leave it be empty)
            rankColor: "rgba(255, 3, 3, 1)"  <-- special rank color
        },

    If you want to change skin type replace userSKinTypeInAdminTeam with something you want from array in comments
    */
    userSKinTypeInAdminTeam: "bust", /*[full, bust, head, face, front, frontFull, skin]*/
    atGroupsDefaultColors: {
        leaders: "rgba(255, 124, 124, 0.5)",
        developers: "rgba(230, 83, 0, 0.5)",
        helpers: "rgba(11, 175, 255, 0.5)",
        builders: "rgba(247, 2, 176, 0.5)",
    },
    adminTeamPage: {
        Creator: [
            {
                inGameName: "DavidIredI17",
                rank: "Founder",
                skinUrlOrPathToFile: "",
                rankColor: "rgba(255, 3, 3, 1)"
            }
        ],
        Owners: [
            {
                inGameName: "Pvpbueno",
                rank: "Owner",
                skinUrlOrPathToFile: "",
                rankColor: ""
            },
            {
                inGameName: "XKJUNIOR",
                rank: "Owner",
                skinUrlOrPathToFile: "",
                rankColor: ""
            }
        ],
        CoOwners: [
            {
                inGameName: "Konstantinos",
                rank: "Co Owner",
                skinUrlOrPathToFile: "",
                rankColor: ""
            },
            {
                inGameName: "MrMox",
                rank: "Co Owner",
                skinUrlOrPathToFile: "",
                rankColor: ""
            }
        ],
        Developers: [
            {
                inGameName: "Kakashi Sensei",
                rank: "Host Provider",
                skinUrlOrPathToFile: "",
                rankColor: ""
            },
            {
                inGameName: "Greep Project",
                rank: "Developing Team",
                skinUrlOrPathToFile: "",
                rankColor: ""
            }
        ]
    },

    /*
    Contact form
    ------------
    To activate, you need to send the first email via the contact form and confirm it in the email.
    Emails are sent via https://formsubmit.co/
    */
    contactPage: {
        email: "astronavta@example.com"
    }
}

const n = 19
const rots = [
  { ry: 270, a:0.5 },
  { ry: 0,   a:0.85 },
  { ry: 90,  a:0.4 },
  { ry: 180, a:0.0 }
]

gsap.set(".face", {
  z: 200,
  rotateY: i => rots[i].ry,
  transformOrigin: "50% 50% -201px"
});

for (let i=0; i<n; i++){
  let die = document.querySelector('.die')
  let cube = die.querySelector('.cube')
  
  if (i>0){    
    let clone = document.querySelector('.die').cloneNode(true);
    document.querySelector('.tray').append(clone);
    cube = clone.querySelector('.cube')
  }
  
  gsap.timeline({repeat:-1, yoyo:true, defaults:{ease:'power3.inOut', duration:1}})
  .fromTo(cube, {
    rotateY:-90
  },{
    rotateY:90,
    ease:'power1.inOut',
    duration:2
  })
  .fromTo(cube.querySelectorAll('.face'), {
    color:(j)=>'hsl('+(i/n*75+130)+', 67%,'+(100*[rots[3].a, rots[0].a, rots[1].a][j])+'%)'
  },{
    color:(j)=>'hsl('+(i/n*75+130)+', 67%,'+(100*[rots[0].a, rots[1].a, rots[2].a][j])+'%)'
  }, 0)
  .to(cube.querySelectorAll('.face'), {
    color:(j)=>'hsl('+(i/n*75+130)+', 67%,'+(100*[rots[1].a, rots[2].a, rots[3].a][j])+'%)'
  }, 1)
  .progress(i/n)
}

gsap.timeline()
  .from('.tray', {yPercent:-3, duration:2, ease:'power1.inOut', yoyo:true, repeat:-1}, 0)
  .fromTo('.tray', {rotate:-15},{rotate:15, duration:4, ease:'power1.inOut', yoyo:true, repeat:-1}, 0)
  .from('.die', {duration:0.01, opacity:0, stagger:{each:-0.05, ease:'power1.in'}}, 0)
  .to('.tray', {scale:1.2, duration:2, ease:'power3.inOut', yoyo:true, repeat:-1}, 0)

window.onload = window.onresize = ()=> {
  const h = n*56
  gsap.set('.tray', {height:h})
  gsap.set('.pov', {scale:innerHeight/h})
}

/*If you want to change website color go to /css/global.css and in :root {} is a color pallete (don't change names of variables, change only values)*/
















/*If you want everything to work as it should and you don't understand what is written here, don't touch it :D*/


/*Mobile navbar (open, close)*/
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navbarLinks.classList.toggle("active");
})

/*FAQs*/
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", () => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;

        if(accordionItemHeader.classList.contains("active")) accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        else accordionItemBody.style.maxHeight = "0px";
    });
});

/*Config navbar*/
const serverName = document.querySelector(".server-name");
const serverLogo = document.querySelector(".logo-img");
/*Config header*/
const serverIp = document.querySelector(".minecraft-server-ip");
const serverLogoHeader = document.querySelector(".logo-img-header");
const discordOnlineUsers = document.querySelector(".discord-online-users");
const minecraftOnlinePlayers = document.querySelector(".minecraft-online-players");
/*Config contact*/
const contactForm = document.querySelector(".contact-form");
const inputWithLocationAfterSubmit = document.querySelector(".location-after-submit");

const getDiscordOnlineUsers = async () => {
    try {
        const discordServerId = config.serverInfo.discordServerID;

        const apiWidgetUrl = `https://discord.com/api/guilds/${discordServerId}/widget.json`;
        let response = await fetch(apiWidgetUrl);
        let data = await response.json();

        if(!data.presence_count) return "None";
        else return (await data.presence_count);
    } catch (e) {
        return "None";
    }
}

const getMinecraftOnlinePlayer = async () => {
     try {
        const apiUrl = `https://api.mcsrvstat.us/2/144.21.34.231:7055`;
        let response = await fetch(apiUrl);
        let data = await response.json();
        return data.players.online;
    }
    catch (e) {
        console.log(e);
        return "None";
    }
}

const getUuidByUsername = async (username) => {
    try {
        const usernameToUuidApi = `https://api.minetools.eu/uuid/${username}`;
        let response = await fetch(usernameToUuidApi);
        let data = await response.json();

        return data.id;
    } catch (e) {
        console.log(e);
        return "None";
    }
}

const getSkinByUuid = async (username) => {
    try {
        const skinByUuidApi = `https://visage.surgeplay.com/${config.userSKinTypeInAdminTeam}/512/${await getUuidByUsername(username)}`;
        let response = await fetch(skinByUuidApi);

        if(response.status === 400) return `https://visage.surgeplay.com/${config.userSKinTypeInAdminTeam}/512/ec561538f3fd461daff5086b22154bce`;
        else return skinByUuidApi;
    } catch (e) {
        console.log(e);
        return "None";
    }
}

/*IP copy only works if you have HTTPS on your website*/
const copyIp = () => {
    const copyIpButton = document.querySelector(".copy-ip");
    const copyIpAlert = document.querySelector(".ip-copied");

    copyIpButton.addEventListener("click", () => {
        try {
            navigator.clipboard.writeText(config.serverInfo.serverIp);
    
            copyIpAlert.classList.add("active");

            setTimeout(() => {
                copyIpAlert.classList.remove("active");
            }, 5000);
        } catch (e) {
            console.log(e);
            copyIpAlert.innerHTML = "An error has occurred!";
            copyIpAlert.classList.add("active");
            copyIpAlert.classList.add("error");

            setTimeout(() => {
                copyIpAlert.classList.remove("active");
                copyIpAlert.classList.remove("error");
            }, 5000);
        }
    })
}

const setDataFromConfigToHtml = async () => {
    /*Set config data to navbar*/
    serverName.innerHTML = config.serverInfo.serverName;
    serverLogo.src = `images/` + config.serverInfo.serverLogoImageFileName;

    /*Set config data to header*/
    serverIp.innerHTML = config.serverInfo.serverIp;

    let locationPathname = location.pathname;
        serverLogoHeader.src = `images/` + config.serverInfo.serverLogoImageFileName;
        (async () => {
            discordOnlineUsers.innerHTML = await getDiscordOnlineUsers();
            minecraftOnlinePlayers.innerHTML = await getMinecraftOnlinePlayer();
        })();
    }
setDataFromConfigToHtml();
