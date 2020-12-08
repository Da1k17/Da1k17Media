import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {FontAwesomeIcon} from"@fortawesome/react-fontawesome"
import {faIdBadge, faPenFancy, faAddressBook, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons"
import {faTwitterSquare, faFacebookSquare, faInstagramSquare} from "@fortawesome/free-brands-svg-icons"

const About = ({data, location}) => {
  return (
    <Layout>
          <SEO
                  pagetitle="About Daiki"
                  pagedesc="Daikiの自己紹介です"
                  pagepath={location.pathname}
          />
          <article className="content">
                  <section className="container">
                        <h1 className="bar">
                              About
                        </h1>
                        <aisde className="info">
                              <div className="subtitle">
                                    Portfolio
                              </div>
                        </aisde>
                        <div className="postbody">
                              <h2>
                                    <FontAwesomeIcon icon={faIdBadge} />
                                    プロフィール
                              </h2>

                              <dl className="profile_text_max">
                                    <dt className="bold">名前</dt>
                                    <dd>古川大暉（フルカワ ダイキ）</dd>
                                    <dt className="bold">SNS</dt>
                                    <dd>
                                          <p><a href="" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /><span style={{paddingLeft: "10px"}}>Twitter</span></a></p>
                                          <p><a href="" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} /><span style={{paddingLeft: "10px"}}>Instagram</span></a></p>
                                          <p><a href="" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /><span style={{paddingLeft: "10px"}}>Facebook</span></a></p>
                                    </dd>
                                    <dt className="bold">職業</dt>
                                    <dd>
                                          <p>学生</p>
                                          <p>アクロバットパフォーマー</p>
                                    </dd>
                                    <dt className="bold">出身地</dt>
                                    <dd>茨城県つくば市</dd>
                              </dl>
                              <h3> 活動</h3>
                              <p>早稲田大学に在学中からWEBエンジニアとして活動する</p>
                        </div>
                        <div className="postbody">
                                    <h2>
                                          <FontAwesomeIcon icon={faPenFancy} />
                                          スキル
                                    </h2>
                                    <div>
                                          <div>
                                                <h2>アプリ開発</h2>
                                                <p>クライアントの業務効率化やシステム向上のためにノーコード を使って、アプリの開発をおこなっています。</p>
                                          </div>
                                    </div>
                                    <div>
                                          <div>
                                                <h2>ウェブサイト制作</h2>
                                                <p>企業サイト、個人ポートフォリオ、LPなどWebサイト全般の制作を承ります。</p>
                                          </div>
                                    </div>
                                    <div>
                                          <div>
                                                <h2>マーケティング </h2>
                                                <p>開発したWebサイトやアプリに集まったデータとクライアントのヒアリングを元にクライアントにあったマーケティング施策を考えていきます。</p>
                                          </div>
                                    </div>
                                    <h3>活動</h3>
                                    <p></p>
                              </div>
                              <div className="postbody">
                                    <h2>
                                          <FontAwesomeIcon icon={faAddressBook} />
                                          実績
                                    </h2>
                                    <p>
                                          <a href="http://studio-tsuchiura.main.jp/" target="_blank">
                                                <sapn style={{paddingRight: "10px"}}>studio LAVISH Webサイト作成</sapn>
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                          </a>
                                    </p>
                              </div>
                  </section>
            </article>
    </Layout>
  )
}

export default About
