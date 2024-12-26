import{_ as a,c as r,a2 as o,o as t}from"./chunks/framework.BQmytedh.js";const f=JSON.parse('{"title":"소개","description":"","frontmatter":{},"headers":[],"relativePath":"ko-kr/guide/introduction.md","filePath":"ko-kr/guide/introduction.md","lastUpdated":1734384735000}'),d={name:"ko-kr/guide/introduction.md"};function n(i,e,s,c,l,h){return t(),r("div",null,e[0]||(e[0]=[o('<h1 id="소개" tabindex="-1">소개 <a class="header-anchor" href="#소개" aria-label="Permalink to &quot;소개&quot;">​</a></h1><p><code>asdf</code>는 툴 버전 매니저입니다. 모든 툴 버전 정의들은 당신의 팀들과 공유되는 프로젝트의 Git 리포지토리에서 확인할 수 있는 하나의 (<code>.tool-versions</code>) 파일에 있으며, 모든 사람들이 <strong>정확히</strong> 같은 버전의 툴들을 사용하게 합니다.</p><p>기존의 작업 방식은 여러 CLI 버전 매니저들, 각각의 고유한 API, 설정 파일들 그리고 구현이 필요했었습니다 (e.g. <code>$PATH</code> 조정, shims, 환경 변수 등...). <code>asdf</code>는 개발 워크플로우 단순화를 위해 단 하나의 인터페이스와 설정파일을 제공하고 단순한 플러그인 인터페이스를 통해 모든 툴과 런타임들 확장가능합니다.</p><h2 id="작동방식" tabindex="-1">작동방식 <a class="header-anchor" href="#작동방식" aria-label="Permalink to &quot;작동방식&quot;">​</a></h2><p><code>asdf</code> 코어가 셸 설정과 함께 설치되면, 플러그인들이 특정 툴들을 관리하기 위해 설치됩니다. 플러그인에 의해 한가지 툴이 설치되면, <a href="https://en.wikipedia.org/wiki/Shim_(computing)" target="_blank" rel="noreferrer">shims</a>들을 가진 실행파일들이 각각의 툴들을 위해 생성됩니다. 실행파일들을 실행하려 할 때, <code>.tool-versions</code>에 설정된 툴의 버전을 통해 <code>asdf</code>가 어떤 버전을 실행시킬 지 결정하고 해당 shim이 대신 실행됩니다.</p><h2 id="관련된-프로젝트" tabindex="-1">관련된 프로젝트 <a class="header-anchor" href="#관련된-프로젝트" aria-label="Permalink to &quot;관련된 프로젝트&quot;">​</a></h2><h3 id="nvm-n-rbenv-등" tabindex="-1">nvm / n / rbenv 등 <a class="header-anchor" href="#nvm-n-rbenv-등" aria-label="Permalink to &quot;nvm / n / rbenv 등&quot;">​</a></h3><p><a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">nvm</a>, <a href="https://github.com/tj/n" target="_blank" rel="noreferrer">n</a> 그리고 <a href="https://github.com/rbenv/rbenv" target="_blank" rel="noreferrer">rbenv</a>과 같은 툴들은 설치된 실행파일을 위한 shim들을 만드는 셸 스크립트들로 작성되어 있습니다.</p><p><code>asdf</code>는 매우 비슷하고 툴/런타임 버전 관리의 영역에서 경쟁하기 위해 만들어졌습니다. <code>asdf</code>의 차별화 요소는 플러그인 시스템이 툴/런타임 별 매니저의 필요성, 각기 다른 명령어들, 그리고 리포지토리에 각각 <code>*-version</code> 파일들을 제거하였다는 것입니다.</p><h3 id="direnv" tabindex="-1">direnv <a class="header-anchor" href="#direnv" aria-label="Permalink to &quot;direnv&quot;">​</a></h3><blockquote><p>현재 디렉토리에 따라 환경 변수들을 load와 unload 할 수 있는 새로운 기능을 기존의 셸에 추가합니다.</p></blockquote><p><code>asdf</code>는 환경 변수들을 관리하지 않습니다만, <a href="https://github.com/asdf-community/asdf-direnv" target="_blank" rel="noreferrer"><code>asdf-direnv</code></a> 플러그인을 통해 direnv 동작를 <code>asdf</code>에 통합할 수 있습니다.</p><p><a href="https://direnv.net/" target="_blank" rel="noreferrer">direnv 문서</a>에서 더보기.</p><h3 id="homebrew" tabindex="-1">Homebrew <a class="header-anchor" href="#homebrew" aria-label="Permalink to &quot;Homebrew&quot;">​</a></h3><blockquote><p>macOS (혹은 Linux)에서의 패키지 매니저 부재</p></blockquote><p>Homebrew는 패키지들과 upstream dependencies들을 관리합니다. <code>asdf</code>는 upstream dependencies들을 관리하지 않고, 패키지 매니저가 아니고, 우리가 dependency 목록들을 작게 유지하므로, 사용자가 직접 관리해야합니다.</p><p><a href="https://brew.sh/" target="_blank" rel="noreferrer">Homebrew 문서</a>에서 더보기.</p><h3 id="nixos" tabindex="-1">NixOS <a class="header-anchor" href="#nixos" aria-label="Permalink to &quot;NixOS&quot;">​</a></h3><blockquote><p>Nix는 패키지 관리와 시스템 설정에 창의적으로 접근하는 툴입니다.</p></blockquote><p>NixOS는, <code>asdf</code>가 제공하지 않는, 각 툴의 전체 dependency tree를 통해 패키지들의 정확한 버전들을 관리함으로써 재현가능한 환경 구축을 목표로 합니다. NixOS는 자신만의 프로그래밍 언어, 많은 CLI 툴들, 그리고 6000개가 넘는 패키지 컬렉션을 통해 해당 기능을 제공합니다.</p><p>다시 한번 말씀드리지만, <code>asdf</code>는 upstream dependencies들을 관리하지 않으며 패키지 매니저가 아닙니다.</p><p><a href="https://nixos.org/guides/how-nix-works.html" target="_blank" rel="noreferrer">NixOS 문서</a>에서 더보기.</p><h2 id="왜-asdf를-사용할까요" tabindex="-1">왜 asdf를 사용할까요? <a class="header-anchor" href="#왜-asdf를-사용할까요" aria-label="Permalink to &quot;왜 asdf를 사용할까요?&quot;">​</a></h2><p><code>asdf</code>는 팀들이 플러그인 시스템을 통해 <strong>다양한</strong> 툴들의 지원 그리고 셸 설정에 포함시킬 하나의 <strong>셸</strong> 스크립트의 <em>단순함</em> 과 <em>친숙성</em> 을 통해 <strong>정확히</strong> 같은 버전의 툴들을 사용하는 것을 보장합니다.</p><div class="tip custom-block"><p class="custom-block-title">노트</p><p><code>asdf</code>는 시스템 패키지 매니저가 아닙니다. 이것은 툴 버전 매니저입니다. 단지 어떠한 툴을 위한 플러그인을 생성하고 그것의 버전을 <code>asdf</code>로 관리할 수 있다고 해서, 그 특정한 툴을 버전 관리를 위한 최선의 방법을 의미하는 것은 아닙니다.</p></div>',25)]))}const m=a(d,[["render",n]]);export{f as __pageData,m as default};