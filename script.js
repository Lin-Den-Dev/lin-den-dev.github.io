"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var businessSkills = ["IT project management", "Process analysis and optimization", "Technical documentation", "Stakeholder communication"];
function Header() {
  return /*#__PURE__*/React.createElement("header", {
    className: "bg-dark text-light py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container text-center"
  }, /*#__PURE__*/React.createElement("h1", null, "Krzysztof Lipski"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Software Engineer")));
}
function Skills() {
  var _React$useState = React.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    showDetails = _React$useState2[0],
    setShowDetails = _React$useState2[1];
  var toggleDetails = function toggleDetails(index) {
    setShowDetails(function (prevState) {
      var newState = _toConsumableArray(prevState);
      newState[index] = !newState[index];
      return newState;
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "skills",
    className: "container py-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-center mb-4"
  }, "Skills"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/React.createElement("h3", null, "Technical Skills"), /*#__PURE__*/React.createElement("ul", {
    className: "list-group"
  }, /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, "Java"), /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, "Spring"), /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, "SQL"), /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, "Python"), /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, "Angular"), /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, "Bash"), /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, "Scrum"))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/React.createElement("h3", null, "Business Skills"), /*#__PURE__*/React.createElement("ul", {
    className: "list-group"
  }, businessSkills.map(function (skill, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: "list-group-item"
    }, skill, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-link btn-sm",
      onClick: function onClick() {
        return toggleDetails(index);
      }
    }, showDetails[index] ? "Show less" : "Show more"), showDetails[index] && /*#__PURE__*/React.createElement("p", {
      className: "text-muted mt-2"
    }, skill === "IT project management" && "Planning, organizing, monitoring, and executing IT projects.", skill === "Process analysis and optimization" && "Identifying and eliminating bottlenecks in business processes.", skill === "Technical documentation" && "Creating clear and understandable project documentation and instructions.", skill === "Stakeholder communication" && "Effective communication with business and technical teams."));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/React.createElement("h3", null, "Soft Skills"), /*#__PURE__*/React.createElement("ul", {
    className: "list-group"
  }, /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, "Analytical thinking and problem-solving"), /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, "Communication and teamwork"), /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, "Initiative and independence"), /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, "Eagerness to learn and adaptability"), /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, "Organization and efficiency"), /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, "Quick learning")))));
}
function Experience() {
  return /*#__PURE__*/React.createElement("section", {
    id: "experience",
    className: "container py-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-center mb-4"
  }, "Experience"), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("h3", null, "Freelancing"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "May 2022 - currently")), /*#__PURE__*/React.createElement("p", null, " Full-stack software development expert specializing in Java/ Spring backend and React.js frontend. Successfully delivered projects for various clients, demonstrating flexibility and strong client communication skills.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "IT Department"), /*#__PURE__*/React.createElement("p", null, "Toyota Motors Poland"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Sep 2021 - Dec 2022")), /*#__PURE__*/React.createElement("p", null, "Led the design and development of a web application, overcoming challenges in data integration and UI responsiveness to deliver a user-friendly solution. Proactively troubleshooted technical issues and implemented solutions, ensuring smooth project execution and minimizing downtime. Adapted quickly to new technologies and tools, contributing effectively to the project s success despite a steep learning curve.")));
}
function Projects() {
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    className: "container py-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-center mb-4"
  }, "Projects"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "card-title"
  }, "Omni-kom: Gamer-Connecting Platform"), /*#__PURE__*/React.createElement("p", {
    className: "card-text"
  }, "Project description and details."), /*#__PURE__*/React.createElement("p", {
    className: "text-muted"
  }, /*#__PURE__*/React.createElement("b", null, "Date:"), " September 2023 - December 2023"), /*#__PURE__*/React.createElement("p", {
    className: "text-muted"
  }, /*#__PURE__*/React.createElement("b", null, "Technologies:"), " Java, Swing, Lombok"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-primary"
  }, "Project Link ")))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "card-title"
  }, "Tomorrow's Weather App"), /*#__PURE__*/React.createElement("p", {
    className: "card-text"
  }, "Project description and details."), /*#__PURE__*/React.createElement("p", {
    className: "text-muted"
  }, /*#__PURE__*/React.createElement("b", null, "Date:"), " December 2023 - February 2024"), /*#__PURE__*/React.createElement("p", {
    className: "text-muted"
  }, /*#__PURE__*/React.createElement("b", null, "Technologies:"), " Python, Docker, Flask, Streamlit, Numpy, Cufflinks, Matplotlib, Scikit-learn"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-primary"
  }, "Project Link "))))));
}
function Education() {
  return /*#__PURE__*/React.createElement("section", {
    id: "education",
    className: "container py-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-center mb-4"
  }, "Education"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("h3", null, "Engineer's Degree in Computer Science"), /*#__PURE__*/React.createElement("p", null, "Polish-Japanese Academy of Information Technology"), /*#__PURE__*/React.createElement("p", null, "Warsaw, Poland"), /*#__PURE__*/React.createElement("p", null, "2024"))));
}
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render([/*#__PURE__*/React.createElement(Header, {
  key: "header"
}), /*#__PURE__*/React.createElement(Skills, {
  key: "skills"
}), /*#__PURE__*/React.createElement(Experience, {
  key: "experience"
}), /*#__PURE__*/React.createElement(Projects, {
  key: "projects"
}), /*#__PURE__*/React.createElement(Education, {
  key: "education"
})]);
