import{_ as a,c as o,a2 as r,o as t}from"./chunks/framework.BQmytedh.js";const p=JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"ja-jp/more/faq.md","filePath":"ja-jp/more/faq.md","lastUpdated":1704890757000}'),s={name:"ja-jp/more/faq.md"};function i(d,e,n,c,h,l){return t(),o("div",null,e[0]||(e[0]=[r('<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><p>ここでは、<code>asdf</code>に関するよくある質問を紹介します。</p><h2 id="wsl1をサポートしていますか" tabindex="-1">WSL1をサポートしていますか? <a class="header-anchor" href="#wsl1をサポートしていますか" aria-label="Permalink to &quot;WSL1をサポートしていますか?&quot;">​</a></h2><p>WSL1 (<a href="https://ja.wikipedia.org/wiki/Windows_Subsystem_for_Linux" target="_blank" rel="noreferrer">Windows Subsystem for Linux</a> 1)は公式にはサポートしていません。<code>asdf</code>は正常に動作しない可能性があります。WSL1を公式にサポートする予定はありません。</p><h2 id="wsl2をサポートしていますか" tabindex="-1">WSL2をサポートしていますか? <a class="header-anchor" href="#wsl2をサポートしていますか" aria-label="Permalink to &quot;WSL2をサポートしていますか?&quot;">​</a></h2><p>WSL2 (<a href="https://ja.wikipedia.org/wiki/Windows_Subsystem_for_Linux#WSL2" target="_blank" rel="noreferrer">Windows Subsystem for Linux</a> 2)では、あなたが選択したWSLディストリビューションに基づいて、セットアップと依存関係の解決を済ませれば、動作するはずです。</p><p>重要なのは、WSL2が正常に動作するのは、カレントワークディレクトリがWindowsドライブではなくUnixドライブである場合に <em>限られる</em> ということです。</p><p>GitHub Actionsでホストランナーのサポートが可能になれば、WSL2でテストスイートを実行する予定ですが、現時点ではそうではないようです。</p><h2 id="新しくインストールした実行ファイルが実行できないのですが" tabindex="-1">新しくインストールした実行ファイルが実行できないのですが? <a class="header-anchor" href="#新しくインストールした実行ファイルが実行できないのですが" aria-label="Permalink to &quot;新しくインストールした実行ファイルが実行できないのですが?&quot;">​</a></h2><blockquote><p><code>npm install -g yarn</code>を実行したにも関わらず、<code>yarn</code>が実行できません。どうなっているの?</p></blockquote><p><code>asdf</code>は<a href="https://en.wikipedia.org/wiki/Shim_(computing)" target="_blank" rel="noreferrer">Shim</a>を使って実行ファイルを管理しています。プラグインによってインストールされるものは、自動的にShimが作成されますが、<code>asdf</code>が管理しているツールによって実行ファイルがインストールされた場合は、Shimを作成しなければならないということを<code>asdf</code>に通知する必要があります。上記の例では、<a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">Yarn</a>のShimを作成しなければいけません。詳しくは、<a href="/ja-jp/manage/core.html#shimの再作成"><code>asdf reshim</code>コマンドのドキュメント</a>をご覧ください。</p><h2 id="シェルが、新しくインストールされたshimを検知してくれないのですが" tabindex="-1">シェルが、新しくインストールされたShimを検知してくれないのですが? <a class="header-anchor" href="#シェルが、新しくインストールされたshimを検知してくれないのですが" aria-label="Permalink to &quot;シェルが、新しくインストールされたShimを検知してくれないのですが?&quot;">​</a></h2><p><code>asdf reshim</code>コマンドを実行しても問題が解決しない場合、<code>asdf.sh</code>や<code>asdf.fish</code>のsourceが、シェルの構成ファイル(<code>.bash_profile</code>、<code>.zshrc</code>、<code>config.fish</code>など)の<strong>一番下</strong>にないことが原因である可能性があります。<code>$PATH</code>を設定した<strong>後</strong>、そしてフレームワーク(oh-my-zshなど)を使用しているのれあればそれをsourceした<strong>後</strong>に、sourceする必要があります。</p>',13)]))}const m=a(s,[["render",i]]);export{p as __pageData,m as default};