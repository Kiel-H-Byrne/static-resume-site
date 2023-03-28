import React, { useState, useEffect } from "react";

type REGProps = {
  gist: string;
  loadingClass?: string;
  wrapperClass?: string;
  titleClass?: string;
  contentClass?: string;
  errorClass?: string;
  loadingFallback?: string;
  file?: string;
};
export default function ReactEmbedGist(props: REGProps) {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getGist();
  }, [props.gist]);

  const getGist = async () => {
    const { gist, file } = props;
    const id = gist.split("/")[1];

    if (!id) {
      setLoading(false);
      setError(`${gist} is not valid format`);
      return;
    }

    setLoading(true);
    setupCallback(id);

    const script = document.createElement("script");
    let url = `https://gist.github.com/${gist}.json?callback=gist_callback_${id}`;
    if (file) url += `&file=${file}`;
    script.type = "text/javascript";
    script.src = url;
    script.onerror = (e) => handleNetworkErrors(e);
    document.head.appendChild(script);
  };

  const handleNetworkErrors = (e) => {
    setError(`${props.gist} failed to load`);
    setLoading(false);
  };

  const setupCallback = (id) => {
    window[`gist_callback_${id}`] = function (gist) {
      const nextState = { loading: false, error: gist.error || null };

      if (!nextState.error) {
        setTitle(gist.description);
        setContent(`${gist.div.replace(/href=/g, 'target="_blank" href=')}`);
      }

      setLoading(nextState.loading);

      if (document.head.innerHTML.indexOf(gist.stylesheet) === -1) {
        let stylesheet = document.createElement("link");
        stylesheet.type = "text/css";
        stylesheet.rel = "stylesheet";
        stylesheet.href = gist.stylesheet;
        document.head.appendChild(stylesheet);
      }
    };
  };

  const {
    loadingClass,
    wrapperClass,
    titleClass,
    contentClass,
    errorClass,
    loadingFallback,
  } = props;

  if (loading) {
    return (
      <article className={loadingClass}>
        {loadingFallback ? loadingFallback : "Loading ..."}
      </article>
    );
  } else if (error) {
    return <article className={errorClass}>{error}</article>;
  } else {
    return (
      <article className={wrapperClass}>
        <h2 className={titleClass}>{title}</h2>
        <section
          className={contentClass}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    );
  }
}
