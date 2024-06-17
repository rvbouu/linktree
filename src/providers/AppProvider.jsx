// Someday add in YouTube API to dynamically populate recent video
// Get most recent repo using GitHub API
// import { createContext, useContext, useState, useEffect } from "react";
// import { Octokit } from 'octokit'

// const octokit = new Octokit({
//   auth: 'YOUR-TOKEN'
// })

// await octokit.request('GET /users/{username}/repos', {
//   username: 'USERNAME',
//   headers: {
//     'X-GitHub-Api-Version': '2022-11-28'
//   }
// })

// const AppContext = createContext({});
// export const useAppContext = () => useContext(AppContext);

// // Verifying Users by Session Storage For the Shopping Cart
// export function AppProvider(props) {
//   const [repo, setRepo] = useState()

//   return (
//     <AppContext.Provider value={{}}>
//       {props.children}
//     </AppContext.Provider>
//   )
// }