import { graphql } from "@octokit/graphql";
import { useEffect, useState } from "react";
import Discussions from "./Discussions";

const { REACT_APP_GITHUB_AGORA_STATES_TOKEN, NODE_ENV } = process.env;

async function getRepository() {
  let token;
  if (NODE_ENV === "development" || NODE_ENV === "test") {
    token = REACT_APP_GITHUB_AGORA_STATES_TOKEN;
  }

  const { repository, viewer } = await graphql(
    `
      {
        repository(owner: "codestates-seb", name: "agora-states-fe") {
          discussions(first: 100) {
            edges {
              node {
                id
                title
                createdAt
                url
                author {
                  login
                  avatarUrl
                }
                category {
                  name
                }
                answer {
                  author {
                    login
                  }
                }
              }
            }
          }
        }
        viewer {
          login
          avatarUrl
        }
      }
    `,
    {
      headers: {
        authorization: `token ${token}`,
      },
    }
  );

  return { repository, viewer };
}

function App() {
  const [repository, setRepository] = useState({});
  const [viewer, setViewer] = useState({});

  const { discussions } = repository;

  console.log(discussions);
  console.log(viewer);

  useEffect(() => {
    getRepository()
      .then((data) => {
        setRepository(data.repository);
        setViewer(data.viewer);
      })
      .catch((error) => {
        console.log(Error, error);
      });
  }, []);

  return (
    <>
      <div className="main">
        <header>
          <h1>My Agora States</h1>
          {viewer !== undefined ? (
            <div className="avatar--wrapper">
              <img src={viewer.avatarUrl} alt={`avatar of ${viewer.login}`} />
              <span>{viewer.login}</span>
            </div>
          ) : null}
        </header>
        <div className="main-wrapper">
          {discussions !== undefined ? (
            <Discussions discussions={discussions} />
          ) : (
            <div>loading...</div>
          )}
        </div>
        <footer>codestates</footer>
      </div>
    </>
  );
}

export default App;
