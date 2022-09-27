import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import image from './Img/photo_2022-09-24_18-35-18.jpg'
import Vimage from './Img/SavvyApps.jpg'
import Eximage from './Img/5Node_js_ExpressTutorialstoGoFromBeginnertoExpert.jpg'
import nimage from './Img/HDwallpaper_node_js,JavaScript,hexagon,abstract,studioshot,blackbackground.jpg'
import Cyimage from './Img/XDXD.jpg'
import Github from './Img/2cb670b6ddd8922a1c1b2fee4f6f758c.jpg'
import Linked from './Img/18c75045489c1c6995d337db8025abcd.jpg'
import infojob from './Img/sass.jpg'
import codepen from './Img/889cff502d34284c412d37b03d2d956c.jpg'
import cujae from './Img/Cujae.jpg'
import java from './Img/images.png'
import dieta from './Img/getty.jpg'
import team from './Img/collab.jpg'

var UserStatus;
(function (UserStatus) {
    UserStatus["LoggedIn"] = "Logged In";
    UserStatus["LoggingIn"] = "Logging In";
    UserStatus["LoggedOut"] = "Logged Out";
    UserStatus["LogInError"] = "Log In Error";
    UserStatus["VerifyingLogIn"] = "Verifying Log In";
})(UserStatus || (UserStatus = {}));
var Default;
(function (Default) {
    Default["PIN"] = "1234";
})(Default || (Default = {}));
var WeatherType;
(function (WeatherType) {
    WeatherType["Cloudy"] = "Cloudy";
    WeatherType["Rainy"] = "Rainy";
    WeatherType["Stormy"] = "Stormy";
    WeatherType["Sunny"] = "Sunny";
})(WeatherType || (WeatherType = {}));
const defaultPosition = () => ({
    left: 0,
    x: 0
});

const T = {
    format: (date) => {
        const hours = T.formatHours(date.getHours()), minutes = date.getMinutes();
        return `${hours}:${T.formatSegment(minutes)}`;
    },
    formatHours: (hours) => {
        return hours % 12 === 0 ? 12 : hours % 12;
    },
    formatSegment: (segment) => {
        return segment < 10 ? `0${segment}` : segment;
    }
};

const ScrollableComponent = (props) => {
    const ref = React.useRef(null);
    const [state, setStateTo] = React.useState({
        grabbing: false,
        position: defaultPosition()
    });
    const handleOnMouseDown = (e) => {
        setStateTo(Object.assign(Object.assign({}, state), { grabbing: true, position: {
                x: e.clientX,
                left: ref.current.scrollLeft
            } }));
    };
    const handleOnMouseMove = (e) => {
        if (state.grabbing) {
            const left = Math.max(0, state.position.left + (state.position.x - e.clientX));
            ref.current.scrollLeft = left;
        }
    };
    const handleOnMouseUp = () => {
        if (state.grabbing) {
            setStateTo(Object.assign(Object.assign({}, state), { grabbing: false }));
        }
    };
    return (React.createElement("div", { ref: ref, className: (`scrollable-component ${props.className}`), id: props.id, onMouseDown: handleOnMouseDown, onMouseMove: handleOnMouseMove, onMouseUp: handleOnMouseUp, onMouseLeave: handleOnMouseUp }, props.children));
};

const Reminder = () => {
  return (React.createElement("div", { className: "reminder" },
      React.createElement("div", { className: "reminder-icon" },
          React.createElement("i", { className: "fa-regular fa-laptop" })),
      React.createElement("span", { className: "reminder-text" },
          "I'm a Front-End Developer ")));
};


const MenuSection = (props) => {
    const getContent = () => {
        if (props.scrollable) {
            return (React.createElement(ScrollableComponent, { className: "menu-section-content" }, props.children));
        }
        return (React.createElement("div", { className: "menu-section-content" }, props.children));
    };
    return (React.createElement("div", { id: props.id, className: "menu-section" },
        React.createElement("div", { className: "menu-section-title" },
            React.createElement("i", { className: props.icon }),
            React.createElement("span", { className: "menu-section-title-text" }, props.title)),
        getContent()));
};

const MenuSection2 = (props) => {
    const getContent = () => {
        return (React.createElement(text));
    };
    return (React.createElement("div", { id: props.id, className: "menu-section" },
        React.createElement("div", { className: "menu-section-title" },
            React.createElement("i", { className: props.icon }),
            React.createElement("span", { className: "menu-section-title-text" }, props.title)),
        getContent()));
};

const QuickNav = () => {
    const getItems = () => {
        return [{
                id: 1,
                label: "React.js"
            }, {
                id: 2,
                label: "Vue.js"
            }, {
                id: 3,
                label: "Javascript"
            },
            {
                id: 4,
                label: "Express.js"
            }, 
            {
                id: 5,
                label: "Cypress"
            },{
                id: 6,
                label: "Node.js"
            }].map((item) => {
            return (React.createElement("div", { key: item.id, className: "quick-nav-item clear-button" },
                React.createElement("span", { className: "quick-nav-item-label" }, item.label)));
        });
    };
    return (React.createElement(ScrollableComponent, { id: "quick-nav" }, getItems()));
};

const text = () =>{
    return(
        <div className='descrip'>
            <p>At now I'm studying Software Engineer on CUJAE(technology's Institute of Havana,Cuba), but I am a self-taught person and passionate by learning by myself technologys like JavaScript, React,Node and Vue.js. I'm very excited to get my first Job as Front-end Developer, so I'm ready for any challenges and start on the professional world of web development as a Junior but I hope to learn more about this profession and recollect experience. I'm a person who prefers the team work for my cohesion skills, I'm a programmer very adaptable to resolve any situation for the team.</p>
        </div>
    )
}

const Weather = () => {
    return (React.createElement(MenuSection2, { icon: "fa-solid fa-sun", id: "weather-section", scrollable: true, title: "little description"},text));
};
const Tools = () => {
    const getTools = () => {
        return [{
                icon: "fa fa-github-alt",
                id: 1,
                image: Github,
                label: "Github",
                name: "elmayii"
            }, {
                icon: "fa fa-linkedin",
                id: 2,
                image: Linked,
                label: "Linkedin",
                name: "Mario Perera"
            }, {
                icon: "fa-solid fa-piggy-bank",
                id: 3,
                image: infojob,
                label: "Infojobs",
                name: "not yet"
            }, {
                icon: "fa-solid fa-plane",
                id: 4,
                image: codepen,
                label: "Codepen",
                name: "elmayii"
            }].map((tool) => {
            const styles = {
                backgroundImage: `url(${tool.image})`
            };
            return (React.createElement("div", { key: tool.id, className: "tool-card" },
                React.createElement("div", { className: "tool-card-background background-image", style: styles }),
                React.createElement("div", { className: "tool-card-content" },
                    React.createElement("div", { className: "tool-card-content-header" },
                        React.createElement("span", { className: "tool-card-label" }, tool.label),
                        React.createElement("span", { className: "tool-card-name" }, tool.name)),
                    React.createElement("i", { className: (`${tool.icon} tool-card-icon`) }))));
        });
    };
    return (React.createElement(MenuSection, { icon: "fa fa-user", id: "tools-section", title: "Counts, follow me!!" }, getTools()));
};
const Restaurants = () => {
    const getRestaurants = () => {
        return [{
                desc: "At moment I study in this institution",
                id: 1,
                image: cujae,
                title: "Cujae"
            }, {
                desc: "I can work in Java, it's my school program languaje",
                id: 2,
                image: java,
                title: "Java"
            }, {
                desc: "I am 21 year old, I'm healty person",
                id: 3,
                image: dieta,
                title: "Health"
            }, {
                desc: "I preffere the teamwork",
                id: 4,
                image: team,
                title: "TeamWork"
            }].map((restaurant) => {
            const styles = {
                backgroundImage: `url(${restaurant.image})`
            };
            return (React.createElement("div", { key: restaurant.id, className: "restaurant-card background-image", style: styles },
                React.createElement("div", { className: "restaurant-card-content" },
                    React.createElement("div", { className: "restaurant-card-content-items" },
                        React.createElement("span", { className: "restaurant-card-title" }, restaurant.title),
                        React.createElement("span", { className: "restaurant-card-desc" }, restaurant.desc)))));
        });
    };
    return (React.createElement(MenuSection, { icon: "fa-regular fa-pot-food", id: "restaurants-section", title: "About me" }, getRestaurants()));
};
const Movies = () => {
    const getMovies = () => {
        return [{
                desc: "I'ts my favorite librery,also this web was builded using it",
                id: 1,
                icon: "fa-solid fa-atom",
                image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                title: "React.js"
            }, {
                desc: "I can develop using it, it's the future",
                id: 2,
                icon: "fa fa-hand-spock-o",
                image: Vimage,
                title: "Vue.js"
            }, {
                desc: "My base languaje ",
                id: 3,
                icon: "fa fa-chrome",
                image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                title: "Javascript"
            }, 
            {
                desc: "I have been develop Apis-backend using it with node.js",
                id: 4,
                icon: "fa fa-terminal",
                image: Eximage,
                title: "Express.js"
            },
            {
                desc: "Same story of express.js",
                id: 5,
                icon: "fa fa-cube",
                image: nimage,
                title: "Node.js"
            },
            {
                desc: "my testing librery",
                id: 6,
                icon: "fa fa-diamond",
                image: Cyimage,
                title: "Cypress"
            },].map((movie) => {
            const styles = {
                backgroundImage: `url(${movie.image})`
            };
            const id = `movie-card-${movie.id}`;
            return (React.createElement("div", { key: movie.id, id: id, className: "movie-card" },
                React.createElement("div", { className: "movie-card-background background-image", style: styles }),
                React.createElement("div", { className: "movie-card-content" },
                    React.createElement("div", { className: "movie-card-info" },
                        React.createElement("span", { className: "movie-card-title" }, movie.title),
                        React.createElement("span", { className: "movie-card-desc" }, movie.desc)),
                    React.createElement("i", { className: movie.icon }))));
        });
    };
    return (React.createElement(MenuSection, { icon: "fa fa-code", id: "movies-section", scrollable: true, title: "SKILLS" }, getMovies()));
};
const UserStatusButton = (props) => {
    const { userStatus, setUserStatusTo } = React.useContext(AppContext);
    const handleOnClick = () => {
        setUserStatusTo(props.userStatus);
    };
    return (React.createElement("button", { id: props.id, className: "user-status-button clear-button", disabled: userStatus === props.userStatus, type: "button", onClick: handleOnClick },
        React.createElement("i", { className: props.icon })));
};

const profilePhoto= () =>{
    return(
        <div class="profile">
      <div class="profile-content">
        <div class="profile-pic">
          <img class="profile-pic-image" src={image} />
        </div>
        <h3 class="profile-name">Mario Perera Valdes</h3>
      </div>
    </div>
    )
}

const Menu = () => {
    return (React.createElement("div", { id: "app-menu" },
        React.createElement("div", { id: "app-menu-content-wrapper" },
            React.createElement("div", { id: "app-menu-content" },
                React.createElement("div", { id: "app-menu-content-header" },
                    React.createElement("div", { className: "app-menu-content-header-section" },
                    React.createElement(profilePhoto),
                        React.createElement(Reminder, null))),
                React.createElement(QuickNav, null),
                React.createElement(Weather, null),
                React.createElement(Restaurants, null),
                React.createElement(Tools, null),
                React.createElement(Movies, null)))));
};
const Background = () => {
    const { userStatus, setUserStatusTo } = React.useContext(AppContext);
    const handleOnClick = () => {
        if (userStatus === UserStatus.LoggedOut) {
            setUserStatusTo(UserStatus.LoggingIn);
        }
    };
    return (React.createElement("div", { id: "app-background", onClick: handleOnClick },
        React.createElement("div", { id: "app-background-image", className: "background-image" })));
};
const Loading = () => {
    return (React.createElement("div", { id: "app-loading-icon" },
        React.createElement("i", { className: "fa-solid fa-spinner-third" })));
};
const AppContext = React.createContext(null);
const App = () => {
    const [userStatus, setUserStatusTo] = React.useState(UserStatus.LoggedIn);
    const getStatusClass = () => {
        return userStatus.replace(/\s+/g, "-").toLowerCase();
    };
    return (React.createElement(AppContext.Provider, { value: { userStatus, setUserStatusTo } },
        React.createElement("div", { id: "app", className: getStatusClass() },
            React.createElement(Menu, null),
            React.createElement(Background, null),
            React.createElement("div", { id: "sign-in-button-wrapper" },
                React.createElement(UserStatusButton, { icon: "fa-solid fa-arrow-right-to-arc", id: "sign-in-button", userStatus: UserStatus.LoggingIn })),
            React.createElement(Loading, null))));
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(React.createElement(App, null));