import logo from "./logo.svg";
import "./App.css";
import { SetStateAction, useState, useEffect } from "react";

type user = {
    id: string;
    name: string;
    item_category: string;
    curriculum_category: string;
    detail: string;
    url: string;
    update_time: string;
};


const Contents = () =>{
    const [name, setName] = useState("");
    const [name2, setName2] = useState("");
    const [item_category, setItem] = useState("");
    const [curriculum_category, setCurriculum] = useState("");
    const [detail, setDetail] = useState("");
    const [url, setUrl] = useState("");
    const [update_time, setTime] = useState("");
    const backend_url = "https://hackathon-backend2-new-qbypvkyhmq-uc.a.run.app/catalog"

    let [users, setUser] = useState<user[]>([
      {
        id: "",
        name: "",
        item_category: "",
        curriculum_category: "",
        detail: "",
        url: "",
        update_time: "",
      },
    ]);
  
    //エラーハンドリング
    const fetchUsers = async () => {
      try {
        const res = await fetch(backend_url+"s");
        if (!res.ok) {
          throw Error(`Failed to fetch catalogs: ${res.status}`);
        }
  
        users = await res.json();
        setUser(users);
        console.log(users);
      } catch (err) {
        console.error(err);
      }
    };
  
    useEffect(() => {
      fetchUsers();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const handleSubmit = async (
      name: string,
      item_category: string,
      curriculum_category: string,
      detail: string,
      url: string,
      e: React.FormEvent<HTMLFormElement>
    ) => {
      e.preventDefault();


      const response1 = await fetch(backend_url+"s", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      users = await response1.json();
      setUser(users);
  
       //nameの空白のバリデーション
      if (!name) {
        alert("Please enter name");
        return;
      }
      //item_categoryのバリデーション
      if(item_category !=='本' && item_category !=='動画' && item_category !=='ブログ'){
        alert("Correct Item_category")
        return;
      }
      if(curriculum_category !=='エディタ' && curriculum_category !=='OSコマンド（とシェル）' && curriculum_category !=='Git' 
          && curriculum_category !=='Github' && curriculum_category !=='HTML&CSS' && curriculum_category !=='JavaScript' 
          && curriculum_category !=='React' && curriculum_category !=='ReactxTypescript' && curriculum_category !=='SQL' 
          && curriculum_category !=='Docker' && curriculum_category !=='Go' && curriculum_category !=='HTTP Server (Go)' 
          && curriculum_category !=='RDBMS(MySQL)へ接続(Go)' && curriculum_category !=='Unit Test(Go)' 
          && curriculum_category !=='フロントエンドとバックエンドの接続' && curriculum_category !=='CI(Continuous Integration' 
          && curriculum_category !=='CD(Continuous Delivery / Deployment)' && curriculum_category !=='認証' && curriculum_category !=='ハッカソンの準備' 
          && curriculum_category !=='ハッカソンの概要' && curriculum_category !=='不明'){
            alert("Correct Curriculum_category")
              return;
                };
  
  
  
      try {
        const result = await fetch(backend_url+"_add", {
          method: "POST",
          body: JSON.stringify({
            name,
            item_category,
            curriculum_category,
            detail,
            url,
          }),
        });
        if (!result.ok) {
          throw Error(`Failed to create user: ${result.status}`);
        }
        users = await result.json();
        setUser(users);
        fetchUsers();
      } catch (err) {
        console.error(err);
      }
    };
  
    const handleSubmit2 = async (
      name: string,
      e: React.FormEvent<HTMLFormElement>
    ) => {
      e.preventDefault();
  
      const response1 = await fetch(backend_url+"s", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      users = await response1.json();
      setUser(users);
  
      if (!name) {
        alert("Please enter name");
        return;
      }
  
      try {
        const result = await fetch(backend_url+"_delete", {
          method: "POST",
          body: JSON.stringify({
            name,
          }),
        });
        if (!result.ok) {
          throw Error(`Failed to create user: ${result.status}`);
        }
        users = await result.json();
        setUser(users);
        fetchUsers();
      } catch (err) {
        console.error(err);
      }
    };
  
    const handleSubmit3 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_book", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit4 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_blog", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit5 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_video", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit6 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_edita", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit7 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_os", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit8 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_git", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit9 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_github", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit10 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_html", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit11 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_javascript", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit12 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_react", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit13 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_react-ts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit14 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_sql", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit15 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_docker", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
    const handleSubmit16 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_go", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit17 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_http", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit18 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_rdbms", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit19 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_unit", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit20 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_fb", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit21 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_ci", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit22 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_cd", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit23 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_authen", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit24 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_ready", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit25 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_hackathon", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    const handleSubmit26 = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetch(backend_url+"_mys", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      users = await result.json();
      setUser(users);
      console.log(users);
    };
  
    return (
      <div className="App">
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(e) => {
            handleSubmit(
              name,
              item_category,
              curriculum_category,
              detail,
              url,
              e
            );
          }}
        >
          <label>Name: </label>
          <input
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label>Item_category: </label>
          <input
            type={"text"}
            value={item_category}
            onChange={(e) => setItem(e.target.value)}
          ></input>
          <label>Curriculum_category: </label>
          <input
            type={"text"}
            value={curriculum_category}
            onChange={(e) => setCurriculum(e.target.value)}
          ></input>
          <label>Detail: </label>
          <input
            type={"text"}
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          ></input>
          <label>URL: </label>
          <input
            type={"text"}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          ></input>
          <button type={"submit"}>追加</button>
        </form>
  
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(e) => {
            handleSubmit2(name2, e);
          }}
        >
          <label>Name: </label>
          <input
            type={"text"}
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          ></input>
          <button type={"submit"}>削除</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit3(e);
          }}
        >
          <button type={"submit"}>本</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit4(e);
          }}
        >
          <button type={"submit"}>ブログ</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit5(e);
          }}
        >
          <button type={"submit"}>動画</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit6(e);
          }}
        >
          <button type={"submit"}>エディタ</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit7(e);
          }}
        >
          <button type={"submit"}>OSコマンド（とシェル）</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit8(e);
          }}
        >
          <button type={"submit"}>Git</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit9(e);
          }}
        >
          <button type={"submit"}>Github</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit10(e);
          }}
        >
          <button type={"submit"}>HTML&CSS</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit11(e);
          }}
        >
          <button type={"submit"}>JavaScript</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit12(e);
          }}
        >
          <button type={"submit"}>React</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit13(e);
          }}
        >
          <button type={"submit"}>ReactxTypeScript</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit14(e);
          }}
        >
          <button type={"submit"}>SQL</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit15(e);
          }}
        >
          <button type={"submit"}>Docker</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit16(e);
          }}
        >
          <button type={"submit"}>Go</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit17(e);
          }}
        >
          <button type={"submit"}>HTTP Server (Go)</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit18(e);
          }}
        >
          <button type={"submit"}>RDBMS(MySQL)へ接続(Go)</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit19(e);
          }}
        >
          <button type={"submit"}>Unit Test(Go)</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit20(e);
          }}
        >
          <button type={"submit"}>フロントエンドとバックエンドの接続</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit21(e);
          }}
        >
          <button type={"submit"}>CI(Continuous Integration)</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit22(e);
          }}
        >
          <button type={"submit"}>CD(Continuous Delivery / Deployment)</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit23(e);
          }}
        >
          <button type={"submit"}>認証</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit24(e);
          }}
        >
          <button type={"submit"}>ハッカソン準備</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit25(e);
          }}
        >
          <button type={"submit"}>ハッカソンの概要</button>
        </form>
  
        <form
          onSubmit={(e) => {
            handleSubmit26(e);
          }}
        >
          <button type={"submit"}>不明</button>
        </form>
  
        <div>
          {Object.values(users).map((post) => (
            <li key={post.id}>
              {post.name}, {post.item_category}, {post.curriculum_category},
              {post.detail},{post.url},{post.update_time}
            </li>
          ))}
        </div>
    </div>
      
    );
};

export default Contents;
