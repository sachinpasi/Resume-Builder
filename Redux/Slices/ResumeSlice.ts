import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  Name: "Jane Roe",
  ProfessionalTitle: "Software Developer",
  Description:
    "Professional Software Developer Passionate about Coding and Enjoy Building Some Good Web Experiences.",

  Email: "Jane.roe@gmail.com",
  PhoneNumber: "2025550166",
  LinkedIn: "www.linkedin.com/in/jane.roe",
  GitHub: "www.github.com/janeroe",
  Website: "www.janeroe.com",
  Medium: "",

  Country: "USA",
  City: "New York",
  Area: "",

  Education: [
    {
      id: uuidv4(),
      StudyProgram: "B.Tech in Computer Science",
      Institute: "The University of Chicago",
      From: "09/2008",
      To: "06/2010",
      Aggregate: "9.1 CGPA",
    },
  ],

  WorkExperience: [
    {
      id: uuidv4(),
      Designation: "Application Development Manager",
      Company: "AirState Solutions",
      From: "09/2014",
      To: "06/2017",
      City: "New York",
      Country: "USA",
      Role: [
        {
          id: uuidv4(),
          value:
            "Successfully managed $2 -3 million budget projects and successfully achieved the project scheduled goals.",
        },
        {
          id: uuidv4(),
          value:
            "Developed and implemented new marketing and sales plans and defined the strategy for the next 5 years.",
        },
        {
          id: uuidv4(),
          value:
            "Reviewed constantly the customer feedback and then suggested ways to improve the processes and customer service levels which increased the satisfaction rate from 81% to 95%.",
        },
        {
          id: uuidv4(),
          value:
            "Ensured that new clients will grow into a loyal customer base in a specialist niche market by implementing a new loyalty program.",
        },
      ],
    },
    {
      id: uuidv4(),
      Designation: "Application Development Assistant",
      Company: "AirState Solutions",
      From: "08/2012",
      To: "09/2014",
      City: "New York",
      Country: "USA",
      Role: [
        {
          id: uuidv4(),
          value:
            "Increased the customer satisfaction rate by 25% by improving the customer service.",
        },
        {
          id: uuidv4(),
          value:
            "Planned, supervised, and coordinated daily activity of 3 junior business analysts.",
        },
        {
          id: uuidv4(),
          value:
            "Improved the communication with the Marketing department to better understand the competitive position.",
        },
      ],
    },
  ],

  Skills: [
    {
      id: uuidv4(),
      value: "HTML5",
    },
    {
      id: uuidv4(),
      value: "CSS3",
    },
    {
      id: uuidv4(),
      value: "JavaScript",
    },
    {
      id: uuidv4(),
      value: "React.JS",
    },
    {
      id: uuidv4(),
      value: "MySQL",
    },
    {
      id: uuidv4(),
      value: "MongoDB",
    },
    {
      id: uuidv4(),
      value: "SQLServer",
    },
    {
      id: uuidv4(),
      value: "Redis",
    },
    {
      id: uuidv4(),
      value: "C#",
    },
    {
      id: uuidv4(),
      value: "C++",
    },
    {
      id: uuidv4(),
      value: ".NET",
    },
  ],
  Projects: [
    {
      id: uuidv4(),
      Title: "Personal Website",
      From: "2015",
      To: "Present",
      Link: "www.xyz.com",
      Description: [
        {
          id: uuidv4(),
          value: "Maintaining the website entertaining.",
        },
        {
          id: uuidv4(),
          value:
            "Original and interactive while applying the HTML, CSS and JavaScript skills while conducting different experiments.",
        },
      ],
    },
  ],
  Interests: [
    {
      id: uuidv4(),
      value: "Cloud Computing",
    },
    {
      id: uuidv4(),
      value: "Blockchain Technology",
    },
    {
      id: uuidv4(),
      value: "Anicient History",
    },
  ],
  Languages: [
    {
      id: uuidv4(),
      value: "English",
    },
    {
      id: uuidv4(),
      value: "French",
    },
    {
      id: uuidv4(),
      value: "Spanish",
    },
  ],

  CurrentFocusSection: null,
};

export const ResumeSlice = createSlice({
  name: "Resume",
  initialState,
  reducers: {
    UPDATE_USER_DATA: (state, action) => {
      if (action.payload.Name !== undefined) {
        state.Name = action.payload.Name;
      }
      if (action.payload.ProfessionalTitle !== undefined) {
        state.ProfessionalTitle = action.payload.ProfessionalTitle;
      }

      if (action.payload.Email !== undefined) {
        state.Email = action.payload.Email;
      }
      if (action.payload.Description !== undefined) {
        state.Description = action.payload.Description;
      }
      if (action.payload.PhoneNumber !== undefined) {
        state.PhoneNumber = action.payload.PhoneNumber;
      }
      if (action.payload.LinkedIn !== undefined) {
        state.LinkedIn = action.payload.LinkedIn;
      }
      if (action.payload.GitHub !== undefined) {
        state.GitHub = action.payload.GitHub;
      }
      if (action.payload.Website !== undefined) {
        state.Website = action.payload.Website;
      }
      if (action.payload.Medium !== undefined) {
        state.Medium = action.payload.Medium;
      }

      if (action.payload.City !== undefined) {
        state.City = action.payload.City;
      }
      if (action.payload.Country !== undefined) {
        state.Country = action.payload.Country;
      }
      if (action.payload.Area !== undefined) {
        state.Area = action.payload.Area;
      }

      // console.log(state);
    },

    UPDATE_USER_EDUCATION: (state, action) => {
      if (action.payload.id && action.payload.id !== "") {
        const index = state.Education.findIndex(
          (item) => item.id === action.payload.id
        );

        const UpdatedEductaion = {
          ...state.Education[index],
          StudyProgram:
            action.payload.StudyProgram || state.Education[index].StudyProgram,
          Institute:
            action.payload.Institute || state.Education[index].Institute,
          From: action.payload.From || state.Education[index].From,
          To: action.payload.To || state.Education[index].To,
          Aggregate:
            action.payload.Aggregate || state.Education[index].Aggregate,
        };

        state.Education = [
          ...state.Education.slice(0, index),
          UpdatedEductaion,
          ...state.Education.slice(index + 1),
        ];
      }
      // console.log(state.Education);
    },
    CREATE_EMPTY_EDUCTAION_FIELD: (state) => {
      state.Education = [
        ...state.Education,
        {
          StudyProgram: "Study Program",
          Aggregate: "Aggregate",
          From: "From",
          Institute: "Institute / Place",
          To: "To",
          id: uuidv4(),
        },
      ];
    },
    MOVE_EDUCTAION_ELEMENT_TOP: (state, action) => {
      const CurrentIndex = state.Education.findIndex(
        (item: any) => item.id === action.payload.id
      );

      function array_move(arr: any, old_index: any, new_index: any) {
        if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;
          while (k--) {
            arr.push(undefined);
          }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
      }

      if (CurrentIndex > 0) {
        state.Education = array_move(
          state.Education,
          CurrentIndex,
          CurrentIndex - 1
        );
      }

      console.log(state.Education);
    },
    MOVE_EDUCTAION_ELEMENT_BOTTOM: (state, action) => {
      const CurrentIndex = state.Education.findIndex(
        (item: any) => item.id === action.payload.id
      );

      function array_move(arr: any, old_index: any, new_index: any) {
        if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;
          while (k--) {
            arr.push(undefined);
          }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
      }

      if (state.Education.length - 1 > CurrentIndex) {
        state.Education = array_move(
          state.Education,
          CurrentIndex,
          CurrentIndex + 1
        );
      }

      console.log(state.Education);
    },
    DELETE_EDUCATION_ITEM: (state, action) => {
      const index = state.Education.findIndex(
        (item: any) => item.id === action.payload.id
      );

      console.log(index);

      let NewEducationArray = [...state.Education];
      if (index > -1) {
        NewEducationArray.splice(index, 1);
      } else {
        `Can't remove education (id: ${action.payload.id}) as its not in the Education Array`;
      }

      state.Education = NewEducationArray;

      console.log(state.Education);
    },

    // WORK EXPERIENCE STARTS

    UPDATE_USER_WORK_EXPERIENCE: (state, action) => {
      if (action.payload.id && action.payload.id !== "") {
        const index = state.WorkExperience.findIndex(
          (item) => item.id === action.payload.id
        );

        const IndexOfRole = state.WorkExperience[index].Role.findIndex(
          (item) => item.id === action.payload.RoleId
        );

        const UpdatedRole = {
          ...state.WorkExperience[index].Role[IndexOfRole],
          value: action.payload.value,
        };

        const NewRole = action.payload.RoleId
          ? [
              ...state.WorkExperience[index].Role.slice(0, IndexOfRole),
              UpdatedRole,
              ...state.WorkExperience[index].Role.slice(IndexOfRole + 1),
            ]
          : null;

        const UpdatedWorkExperience = {
          ...state.WorkExperience[index],
          Designation:
            action.payload.Designation ||
            state.WorkExperience[index].Designation,
          Company:
            action.payload.Company || state.WorkExperience[index].Company,
          From: action.payload.From || state.WorkExperience[index].From,
          To: action.payload.To || state.WorkExperience[index].To,
          City: action.payload.City || state.WorkExperience[index].City,
          Country:
            action.payload.Country || state.WorkExperience[index].Country,
          Role: NewRole || state.WorkExperience[index].Role,
        };

        state.WorkExperience = [
          ...state.WorkExperience.slice(0, index),
          UpdatedWorkExperience,
          ...state.WorkExperience.slice(index + 1),
        ];

        console.log(state.WorkExperience);
      }
    },
    MOVE_WORK_EXPERIENCE_ELEMENT_TOP: (state, action) => {
      const CurrentIndex = state.WorkExperience.findIndex(
        (item: any) => item.id === action.payload.id
      );

      function array_move(arr: any, old_index: any, new_index: any) {
        if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;
          while (k--) {
            arr.push(undefined);
          }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
      }

      if (CurrentIndex > 0) {
        state.WorkExperience = array_move(
          state.WorkExperience,
          CurrentIndex,
          CurrentIndex - 1
        );
      }

      console.log(state.WorkExperience);
    },
    MOVE_WORK_EXPERIENCE_BOTTOM: (state, action) => {
      const CurrentIndex = state.WorkExperience.findIndex(
        (item: any) => item.id === action.payload.id
      );

      function array_move(arr: any, old_index: any, new_index: any) {
        if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;
          while (k--) {
            arr.push(undefined);
          }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
      }

      if (state.WorkExperience.length - 1 > CurrentIndex) {
        state.WorkExperience = array_move(
          state.WorkExperience,
          CurrentIndex,
          CurrentIndex + 1
        );
      }

      console.log(state.WorkExperience);
    },
    CREATE_EMPTY_WORK_EXPERIENCE_FIELD: (state) => {
      state.WorkExperience = [
        ...state.WorkExperience,
        {
          id: uuidv4(),
          Designation: "Designation",
          Company: "Company",
          From: "From",
          To: "To",
          City: "City",
          Country: "Country",
          Role: [
            {
              id: uuidv4(),
              value: "Write Role in your company.",
            },
          ],
        },
      ];
    },
    DELETE_WORK_EXPERIENCE_ITEM: (state, action) => {
      const index = state.WorkExperience.findIndex(
        (item: any) => item.id === action.payload.id
      );

      console.log(index);

      let NewWorkExperienceArray = [...state.WorkExperience];
      if (index > -1) {
        NewWorkExperienceArray.splice(index, 1);
      } else {
        `Can't remove education (id: ${action.payload.id}) as its not in the Education Array`;
      }

      state.WorkExperience = NewWorkExperienceArray;
    },
    ADD_EMPTY_LINE_WORK_EXPERIENEC_ROLE: (state, action) => {
      if (action.payload.id && action.payload.id !== "") {
        const index = state.WorkExperience.findIndex(
          (item) => item.id === action.payload.id
        );

        state.WorkExperience[index].Role = [
          ...state.WorkExperience[index].Role,
          {
            id: uuidv4(),
            value: "Write Your Role",
          },
        ];
      }
    },
    REMOVE_WORK_EXPERIENCE_ROLE: (state, action) => {
      const index = state.WorkExperience.findIndex(
        (item) => item.id === action.payload.id
      );

      const IndexOfRole = state.WorkExperience[index].Role.findIndex(
        (item) => item.id === action.payload.RoleId
      );

      let NewRoleArray = [...state.WorkExperience[index].Role];
      if (IndexOfRole > -1) {
        NewRoleArray.splice(IndexOfRole, 1);
      } else {
        `Can't remove education (id: ${action.payload.id}) as its not in the Education Array`;
      }

      state.WorkExperience[index].Role = NewRoleArray;
    },

    // WORK EXPERIENCE ENDS

    // SKILLS STARTS

    UPDATE_SKILLS_ITEM: (state, action) => {
      if (
        action.payload.id &&
        action.payload.id !== "" &&
        action.payload.value !== ""
      ) {
        const index = state.Skills.findIndex(
          (item) => item.id === action.payload.id
        );

        const UpdatedSkills = {
          ...state.Skills[index],
          value: action.payload.value,
        };

        state.Skills = [
          ...state.Skills.slice(0, index),
          UpdatedSkills,
          ...state.Skills.slice(index + 1),
        ];
      }
    },
    MOVE_SKILL_ITEM_ABOVE: (state, action) => {
      const CurrentIndex = state.Skills.findIndex(
        (item: any) => item.id === action.payload.id
      );

      function array_move(arr: any, old_index: any, new_index: any) {
        if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;
          while (k--) {
            arr.push(undefined);
          }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
      }

      if (CurrentIndex > 0) {
        state.Skills = array_move(state.Skills, CurrentIndex, CurrentIndex - 1);
      }
    },
    MOVE_SKILL_ITEM_BELOW: (state, action) => {
      const CurrentIndex = state.Skills.findIndex(
        (item: any) => item.id === action.payload.id
      );

      function array_move(arr: any, old_index: any, new_index: any) {
        if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;
          while (k--) {
            arr.push(undefined);
          }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
      }

      if (state.Skills.length - 1 > CurrentIndex) {
        state.Skills = array_move(state.Skills, CurrentIndex, CurrentIndex + 1);
      }
    },
    REMOVE_SKILL_ITEM: (state, action) => {
      const index = state.Skills.findIndex(
        (item) => item.id === action.payload.id
      );

      let NewSKILLSArray = [...state.Skills];
      if (index > -1) {
        NewSKILLSArray.splice(index, 1);
      } else {
        `Can't remove education (id: ${action.payload.id}) as its not in the Education Array`;
      }

      state.Skills = NewSKILLSArray;
    },
    CREATE_SKILLS_ITEM: (state) => {
      state.Skills = [
        ...state.Skills,
        {
          id: uuidv4(),
          value: "Add Skill",
        },
      ];
    },

    //PROJECTS STARTS

    CREATE_EMPTY_PROJECT_FIELD: (state) => {
      state.Projects = [
        ...state.Projects,
        {
          id: uuidv4(),
          Title: "Project Title",
          From: "Date Started",
          To: "Date Ended",
          Link: "",
          Description: [
            {
              id: uuidv4(),
              value: "Project Description",
            },
          ],
        },
      ];
    },
    UPDATE_USER_PROJECT: (state, action) => {
      if (action.payload.id && action.payload.id !== "") {
        const index = state.Projects.findIndex(
          (item) => item.id === action.payload.id
        );

        const IndexOfDesc = state.Projects[index].Description.findIndex(
          (item) => item.id === action.payload.DescId
        );

        const UpdatedDesc = {
          ...state.Projects[index].Description[IndexOfDesc],
          value: action.payload.value,
        };

        const NewDesc = action.payload.DescId
          ? [
              ...state.Projects[index].Description.slice(0, IndexOfDesc),
              UpdatedDesc,
              ...state.Projects[index].Description.slice(IndexOfDesc + 1),
            ]
          : null;

        console.log(action.payload.Link);

        const UpdatedProjects = {
          ...state.Projects[index],
          Title: action.payload.Title || state.Projects[index].Title,
          From: action.payload.From || state.Projects[index].From,
          To: action.payload.To || state.Projects[index].To,
          Link: action.payload.Link || state.Projects[index].Link,
          Description: NewDesc || state.Projects[index].Description,
        };

        state.Projects = [
          ...state.Projects.slice(0, index),
          UpdatedProjects,
          ...state.Projects.slice(index + 1),
        ];

        console.log(state.Projects);
      }
    },
    REMOVE_USER_PROJECT_LINK: (state, action) => {
      const index = state.Projects.findIndex(
        (item) => item.id === action.payload.id
      );

      const UpdatedProjects = {
        ...state.Projects[index],
        Link: "",
      };

      state.Projects = [
        ...state.Projects.slice(0, index),
        UpdatedProjects,
        ...state.Projects.slice(index + 1),
      ];
    },
    MOVE_PROJECT_ITEM_ABOVE: (state, action) => {
      const CurrentIndex = state.Projects.findIndex(
        (item: any) => item.id === action.payload.id
      );

      function array_move(arr: any, old_index: any, new_index: any) {
        if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;
          while (k--) {
            arr.push(undefined);
          }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
      }

      if (CurrentIndex > 0) {
        state.Projects = array_move(
          state.Projects,
          CurrentIndex,
          CurrentIndex - 1
        );
      }
    },
    MOVE_PROJECT_ITEM_BELOW: (state, action) => {
      const CurrentIndex = state.Projects.findIndex(
        (item: any) => item.id === action.payload.id
      );

      function array_move(arr: any, old_index: any, new_index: any) {
        if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;
          while (k--) {
            arr.push(undefined);
          }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
      }

      if (state.Projects.length - 1 > CurrentIndex) {
        state.Projects = array_move(
          state.Projects,
          CurrentIndex,
          CurrentIndex + 1
        );
      }
    },
    ADD_EMPTY_LINE_PROJECT_DESC: (state, action) => {
      if (action.payload.id && action.payload.id !== "") {
        const index = state.Projects.findIndex(
          (item) => item.id === action.payload.id
        );

        state.Projects[index].Description = [
          ...state.Projects[index].Description,
          {
            id: uuidv4(),
            value: "Write Project Description",
          },
        ];
      }
    },
    REMOVE_LINE_PROJECT_DESC: (state, action) => {
      const index = state.Projects.findIndex(
        (item) => item.id === action.payload.id
      );

      const IndexOfRole = state.Projects[index].Description.findIndex(
        (item) => item.id === action.payload.DescId
      );

      let NewDescArray = [...state.Projects[index].Description];
      if (IndexOfRole > -1) {
        NewDescArray.splice(IndexOfRole, 1);
      } else {
        `Can't remove education (id: ${action.payload.id}) as its not in the Education Array`;
      }

      state.Projects[index].Description = NewDescArray;
    },
    DELETE_PROJECT_FIELD: (state, action) => {
      const index = state.Projects.findIndex(
        (item: any) => item.id === action.payload.id
      );

      let NewProjectArray = [...state.Projects];
      if (index > -1) {
        NewProjectArray.splice(index, 1);
      } else {
        `Can't remove education (id: ${action.payload.id}) as its not in the Education Array`;
      }

      state.Projects = NewProjectArray;
    },

    //PORJECTS ENDS

    //INTEREST STARTS

    REMOVE_INTEREST_ITEM: (state, action) => {
      const index = state.Interests.findIndex(
        (item: any) => item.id === action.payload.id
      );

      let NewInterestArray = [...state.Interests];
      if (index > -1) {
        NewInterestArray.splice(index, 1);
      } else {
        `Can't remove  (id: ${action.payload.id})`;
      }

      state.Interests = NewInterestArray;
    },
    CREATE_EMPTY_INTEREST_FIELD: (state) => {
      state.Interests = [
        ...state.Interests,
        {
          id: uuidv4(),
          value: "Add Interest",
        },
      ];
    },
    MOVE_INTEREST_ITEM_ABOVE: (state, action) => {
      const CurrentIndex = state.Interests.findIndex(
        (item: any) => item.id === action.payload.id
      );

      function array_move(arr: any, old_index: any, new_index: any) {
        if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;
          while (k--) {
            arr.push(undefined);
          }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
      }

      if (CurrentIndex > 0) {
        state.Interests = array_move(
          state.Interests,
          CurrentIndex,
          CurrentIndex - 1
        );
      }
    },
    MOVE_INTEREST_ITEM_BELOW: (state, action) => {
      const CurrentIndex = state.Interests.findIndex(
        (item: any) => item.id === action.payload.id
      );

      function array_move(arr: any, old_index: any, new_index: any) {
        if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;
          while (k--) {
            arr.push(undefined);
          }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
      }

      if (state.Interests.length - 1 > CurrentIndex) {
        state.Interests = array_move(
          state.Interests,
          CurrentIndex,
          CurrentIndex + 1
        );
      }
    },

    SET_FOCUS_TO_SECTION: (state, action) => {
      state.CurrentFocusSection = action.payload;
    },
  },
});

export const {
  SET_FOCUS_TO_SECTION,
  UPDATE_USER_DATA,
  CREATE_EMPTY_EDUCTAION_FIELD,
  UPDATE_USER_EDUCATION,
  DELETE_EDUCATION_ITEM,
  MOVE_EDUCTAION_ELEMENT_TOP,
  MOVE_EDUCTAION_ELEMENT_BOTTOM,

  UPDATE_USER_WORK_EXPERIENCE,
  MOVE_WORK_EXPERIENCE_ELEMENT_TOP,
  MOVE_WORK_EXPERIENCE_BOTTOM,
  CREATE_EMPTY_WORK_EXPERIENCE_FIELD,
  DELETE_WORK_EXPERIENCE_ITEM,
  ADD_EMPTY_LINE_WORK_EXPERIENEC_ROLE,
  REMOVE_WORK_EXPERIENCE_ROLE,

  CREATE_SKILLS_ITEM,
  UPDATE_SKILLS_ITEM,
  MOVE_SKILL_ITEM_ABOVE,
  MOVE_SKILL_ITEM_BELOW,
  REMOVE_SKILL_ITEM,

  CREATE_EMPTY_PROJECT_FIELD,
  UPDATE_USER_PROJECT,
  REMOVE_USER_PROJECT_LINK,
  MOVE_PROJECT_ITEM_ABOVE,
  MOVE_PROJECT_ITEM_BELOW,
  ADD_EMPTY_LINE_PROJECT_DESC,
  REMOVE_LINE_PROJECT_DESC,
  DELETE_PROJECT_FIELD,

  REMOVE_INTEREST_ITEM,
  CREATE_EMPTY_INTEREST_FIELD,
  MOVE_INTEREST_ITEM_ABOVE,
  MOVE_INTEREST_ITEM_BELOW,
} = ResumeSlice.actions;
export default ResumeSlice.reducer;
