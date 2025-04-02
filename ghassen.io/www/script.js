/*********************************************************
 * Toggle Project Details
 *********************************************************/
function toggleProjectDetails(id) {
    const detailsEl = document.getElementById(id);
    detailsEl.classList.toggle('hidden');
  }
  
  /*********************************************************
   * IntersectionObserver with repeated fade-in
   * We'll remove .show from .animate-on-scroll sections, 
   * but we won't remove it from section titles 
   * (so titles never vanish once shown).
   *********************************************************/
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // If it's a .section-title, we won't remove .show
        const isSectionTitle = entry.target.classList.contains("section-title");
  
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          // We only remove .show if it's not a .section-title
          // so the headings remain visible once they've appeared.
          if (!isSectionTitle) {
            entry.target.classList.remove('show');
          }
        }
      });
    },
    { threshold: 0.1 }
  );
  
  /*********************************************************
   * STRINGS FOR NAVBAR, BUTTONS, FOOTER, ETC. 
   *********************************************************/
  const langNav = {
    en: {
      brand: "Interactive Resume",
      navItems: ["About", "Skills", "Experience", "Education", "Certifications", "Languages"],
      downloadBtn: "Download CV",
      scrollDown: "Scroll Down",
      footer: "© 2025 - Ghassen Bargougui"
    },
    fr: {
      brand: "CV Interactif",
      navItems: ["À Propos", "Compétences", "Expérience", "Éducation", "Certifications", "Langues"],
      downloadBtn: "Télécharger le CV",
      scrollDown: "Faire Défiler",
      footer: "© 2025 - Ghassen Bargougui"
    },
    jp: {
      brand: "インタラクティブ履歴書",
      navItems: ["自己紹介", "スキル", "職務経験", "学歴", "認定資格", "言語"],
      downloadBtn: "CVをダウンロード",
      scrollDown: "スクロールダウン",
      footer: "© 2025 - Ghassen Bargougui"
    }
  };
  
  
  /*********************************************************
   * CV DATA for each language
   *********************************************************/
  const cvData = {
    en: {
      pdf: "CV_Ghassen_Bargougui_en.pdf",
      heroName: "Ghassen Bargougui",
      heroJob: "Software Engineer | Java Full-Stack Developer",
      heroLocation: "Luxembourg, Luxembourg",
      heroPhone: "+352 661 120 421",
      heroEmail: "ghassen.brg16@gmail.com",
      aboutSectionTitle: "About",
      aboutMe: [
        "Software Engineer with 5 years of full-stack experience building Java-based systems and Angular interfaces. Proven ability to modernize UIs and develop robust, scalable backends.",
        "Oracle Certified Professional Java SE 11 Developer, expert in delivering innovative solutions that meet client needs. Fluent in Arabic, English, French. Seeking to leverage my expertise in a collaborative environment to develop high-quality software solutions."
      ],
      sections: {
        skills: {
          title: "Skills",
          items: [
            {
              icon: "fa-code",
              title: "Programming Languages",
              subSkills: ["Java", "TypeScript", "SQL", "JavaScript", "HTML5", "CSS3"]
            },
            {
              icon: "fa-cubes",
              title: "Frameworks & Libraries",
              subSkills: ["Spring Boot", "Hibernate", "Angular", "NestJS", "Node.js", "PrimeNG", "JUnit"]
            },
            {
              icon: "fa-tools",
              title: "Tools & Platforms",
              subSkills: ["Maven", "Git", "Keycloak", "ActiveMQ", "AWS", "WildFly", "Nginx", "Linux", "SonarQube", "JProfiler"]
            },
            {
              icon: "fa-database",
              title: "Databases",
              subSkills: ["PostgreSQL", "MySQL", "MongoDB"]
            },
            {
              icon: "fa-shipping-fast",
              title: "DevOps & CI/CD",
              subSkills: ["Jenkins", "Docker", "CI/CD Pipelines", "Jira", "Agile/Scrum"]
            },
            {
              icon: "fa-project-diagram",
              title: "Other Skills",
              subSkills: ["UML Modeling", "RESTful APIs", "Microservices Architecture", "Performance Optimization"]
            }
          ]
        },
        experience: {
          title: "Experience",
          positions: [
            {
              company: `
                CBTW 
                <a href="https://collaborationbetterstheworld.com" style="color: #fff; margin-left:0.5rem;" target="_blank">
                  <i class="fas fa-external-link-alt"></i>
                </a>,
                Full-Stack Java Developer
              `,
              location: "Luxembourg, Luxembourg | Sept. 2024 – Present",
              responsibilities: [
                "Enterprise Web Development: Designing and maintaining enterprise web apps (Java, Spring Boot, Angular).",
                "Agile Collaboration: Working with cross-functional teams in an Agile environment.",
                "Problem-Solving: Identifying/resolving complex technical issues for optimal performance/user experience.",
                "Code Quality: Participating in code reviews and implementing best practices."
              ],
              projects: []
            },
            {
              company: `
                VERMEG 
                <a href="https://www.vermeg.com" style="color: #fff; margin-left:0.5rem;" target="_blank">
                  <i class="fas fa-external-link-alt"></i>
                </a>,
                Software Engineer
              `,
              location: "Tunis, Tunisia | Oct. 2019 – Aug. 2024",
              responsibilities: [
                "Technical Leadership: Mentoring junior team members, handling critical components.",
                "System Integration: High availability, performance, security for backend & frontend.",
                "Product Development: End-to-end creation of multiple apps (backend & frontend).",
                "Process Optimization: Finding bottlenecks & implementing efficient solutions."
              ],
              projects: [
                {
                  name: "SalesFlow",
                  role: "Lead Developer",
                  shortDesc: "Workflow system to manage insurance proposals, offers, endorsements.",
                  details: [
                    "Functional analysis and client workshops.",
                    "UML modeling and architecture design.",
                    "RESTful API and dynamic UIs.",
                    "Migration to a Camunda BPM–centered architecture."
                  ]
                },
                {
                  name: "PackManager",
                  role: "Backend Developer",
                  shortDesc: "Configuration platform for insurance products, facilitating offer creation & customization.",
                  details: [
                    "Client needs analysis & UML modeling.",
                    "Implementing core features & RESTful APIs.",
                    "Refactoring for better maintainability.",
                    "Performance optimization with JProfiler."
                  ]
                },
                {
                  name: "Solife Digital Portal",
                  role: "Full-Stack Developer",
                  shortDesc: "Portal for brokers/agents to manage life insurance offers/contracts.",
                  details: [
                    "UI revision with Angular.",
                    "Microservices for higher reliability.",
                    "Linux VM management (dev/test).",
                    "Code reviews & junior mentoring."
                  ]
                },
                {
                  name: "Magikforms",
                  role: "Backend Developer",
                  shortDesc: "Platform for digital forms, dashboard, and KPI tracking.",
                  details: [
                    "Java web services for frontend comms.",
                    "Batch processing w/ ActiveMQ.",
                    "Automated user management via Keycloak.",
                    "Performance improvements (JProfiler)."
                  ]
                },
                {
                  name: "Insurance Pricing Module",
                  role: "Full-Stack Developer",
                  shortDesc: "Configure and price various insurance products (individual/group).",
                  details: [
                    "Functional analysis w/ stakeholder interviews.",
                    "Design of product config & premium calculations.",
                    "Actuarial functions in Java + unit tests.",
                    "Data integration optimization (Apache POI, Excel).",
                    "Angular for frontend components."
                  ]
                }
              ]
            }
          ]
        },
        education: {
          title: "Education",
          items: [
            "Engineering Degree in Software - ESPRIT (Sept. 2019 – Jul. 2023)",
            "Bachelor in Computer Science - ISIMM (Sept. 2015 – Jun. 2019)"
          ]
        },
        certifications: {
          title: "Certifications",
          items: [
            `Oracle Certified Professional, Java SE 11 Developer (Sept. 2022) -
             <a href="https://bit.ly/ocp11gb" target="_blank">bit.ly/ocp11gb</a>`
          ]
        },
        languages: {
          title: "Languages",
          items: [
            "<b>Arabic (Native)</b>",
            "<b>English (Fluent)</b>",
            "<b>French (Fluent)</b>",
            "<b>Japanese (Basic conversational proficiency)</b>"
          ]
        }
      }
    },
  
    /* --- FULL FRENCH --- */
    fr: {
      pdf: "CV_Ghassen_Bargougui_fr.pdf",
      heroName: "Ghassen Bargougui",
      heroJob: "Ingénieur Logiciel | Développeur Full-Stack Java",
      heroLocation: "Luxembourg, Luxembourg",
      heroPhone: "+352 661 120 421",
      heroEmail: "ghassen.brg16@gmail.com",
      aboutSectionTitle: "À Propos",
      aboutMe: [
        "Ingénieur Logiciel avec 5 ans d’expérience en développement full-stack, créant des systèmes basés sur Java et Angular. Capacité prouvée à moderniser les interfaces utilisateur et à développer des systèmes backend robustes et évolutifs.",
        "Oracle Certified Professional Java SE 11 Developer, expert dans la livraison de solutions innovantes répondant aux besoins des clients. Maîtrise de l’arabe, l’anglais et le français. Cherche à mettre à profit mon expertise dans un environnement collaboratif pour développer des solutions logicielles de haute qualité."
      ],
      sections: {
        skills: {
          title: "Compétences Clés",
          items: [
            {
              icon: "fa-code",
              title: "Langages de Programmation",
              subSkills: ["Java", "TypeScript", "SQL", "JavaScript", "HTML5", "CSS3"]
            },
            {
              icon: "fa-cubes",
              title: "Frameworks & Bibliothèques",
              subSkills: ["Spring Boot", "Hibernate", "Angular", "NestJS", "Node.js", "PrimeNG", "JUnit"]
            },
            {
              icon: "fa-tools",
              title: "Outils & Plateformes",
              subSkills: ["Maven", "Git", "Keycloak", "ActiveMQ", "AWS", "WildFly", "Nginx", "Linux", "SonarQube", "JProfiler"]
            },
            {
              icon: "fa-database",
              title: "Bases de Données",
              subSkills: ["PostgreSQL", "MySQL", "MongoDB"]
            },
            {
              icon: "fa-shipping-fast",
              title: "DevOps & CI/CD",
              subSkills: ["Jenkins", "Docker", "Pipelines CI/CD", "Jira", "Méthodologies Agile/Scrum"]
            },
            {
              icon: "fa-project-diagram",
              title: "Autres Compétences",
              subSkills: ["Modélisation UML", "APIs RESTful", "Architecture Microservices", "Optimisation des Performances"]
            }
          ]
        },
        experience: {
          title: "Expérience",
          positions: [
            {
              company: `
                CBTW 
                <a href="https://collaborationbetterstheworld.com" style="color: #fff; margin-left:0.5rem;" target="_blank">
                  <i class="fas fa-external-link-alt"></i>
                </a>,
                Développeur Full-Stack Java
              `,
              location: "Luxembourg, Luxembourg | Sept. 2024 – Présent",
              responsibilities: [
                "Développement d’Applications Web (Java, Spring Boot, Angular).",
                "Collaboration Agile : travail étroit avec des équipes interfonctionnelles.",
                "Résolution de problèmes techniques complexes.",
                "Participation aux revues de code et meilleures pratiques."
              ],
              projects: []
            },
            {
              company: `
                VERMEG 
                <a href="https://www.vermeg.com" style="color: #fff; margin-left:0.5rem;" target="_blank">
                  <i class="fas fa-external-link-alt"></i>
                </a>,
                Ingénieur Logiciel
              `,
              location: "Tunis, Tunisie | Oct. 2019 – Août 2024",
              responsibilities: [
                "Leadership Technique : encadrement des juniors et gestion des composants critiques.",
                "Intégration Systèmes : backend et frontend (haute dispo, performance, sécurité).",
                "Développement complet (backend & frontend).",
                "Optimisation des Processus : identification des goulots, solutions efficaces."
              ],
              projects: [
                {
                  name: "SalesFlow",
                  role: "Développeur Principal",
                  shortDesc: "Système de workflow pour gérer les propositions d’assurance, offres, avenants.",
                  details: [
                    "Analyses fonctionnelles et ateliers clients.",
                    "Modélisation UML et conception d’architecture.",
                    "Développement d’API RESTful et d’interfaces dynamiques.",
                    "Migration vers Camunda BPM."
                  ]
                },
                {
                  name: "PackManager",
                  role: "Développeur Backend",
                  shortDesc: "Plateforme de configuration pour les produits d’assurance.",
                  details: [
                    "Analyse des besoins clients, modèles UML.",
                    "Implémentation des fonctionnalités principales, API RESTful.",
                    "Refactorisation pour maintenabilité.",
                    "Optimisation avec JProfiler."
                  ]
                },
                {
                  name: "Solife Digital Portal",
                  role: "Développeur Full-Stack",
                  shortDesc: "Portail web pour courtiers/agents d’assurance vie.",
                  details: [
                    "Révision UI avec Angular.",
                    "Développement microservices pour fiabilité.",
                    "Gestion des VMs Linux (dev/test).",
                    "Revues de code et encadrement junior."
                  ]
                },
                {
                  name: "Magikforms",
                  role: "Développeur Backend",
                  shortDesc: "Plateforme pour formulaires numériques, tableau de bord KPI.",
                  details: [
                    "Services web Java pour le frontend.",
                    "Batch processing via ActiveMQ.",
                    "Automatisation gestion utilisateurs (Keycloak).",
                    "Amélioration performances (JProfiler)."
                  ]
                },
                {
                  name: "Module de Tarification d’Assurance",
                  role: "Développeur Full-Stack",
                  shortDesc: "Module de configuration et de tarification (produits d’assurance).",
                  details: [
                    "Analyses fonctionnelles (entretiens).",
                    "Conception de la config produits et calcul primes.",
                    "Dév. fonctions actuarielles en Java + tests unitaires.",
                    "Optimisation intégration données (Apache POI, Excel).",
                    "Implémentation frontend (Angular)."
                  ]
                }
              ]
            }
          ]
        },
        education: {
          title: "Éducation",
          items: [
            "Diplôme d’Ingénieur en Génie Logiciel - ESPRIT (Sept. 2019 – Juil. 2023)",
            "Licence en Informatique - ISIMM (Sept. 2015 – Juin 2019)"
          ]
        },
        certifications: {
          title: "Certifications",
          items: [
            `Oracle Certified Professional, Java SE 11 Developer (Sept. 2022) -
             <a href="https://bit.ly/ocp11gb" target="_blank">bit.ly/ocp11gb</a>`
          ]
        },
        languages: {
          title: "Langues",
          items: [
            "<b>Arabe (Maternelle)</b>",
            "<b>Anglais (Courant)</b>",
            "<b>Français (Courant)</b>",
            "<b>Japonais (Compétence de base)</b>"
          ]
        }
      }
    },
  
    /* --- FULL JAPANESE --- */
    jp: {
      pdf: "CV_Ghassen_Bargougui_jp.pdf",
      heroName: "ガッセン・バルグギ",
      heroJob: "ソフトウェアエンジニア | Javaフルスタック開発者",
      heroLocation: "ルクセンブルク市、ルクセンブルク",
      heroPhone: "+352 661 120 421",
      heroEmail: "ghassen.brg16@gmail.com",
      aboutSectionTitle: "自己紹介",
      aboutMe: [
        "JavaベースのシステムやAngularインターフェイスを5年間開発してきたソフトウェアエンジニア。UIのモダナイズや拡張性の高いバックエンド開発に秀でています。",
        "Oracle Certified Professional Java SE 11 Developer。顧客ニーズに応えるイノベーティブなソリューションを提供するエキスパート。アラビア語・英語・フランス語に堪能。高品質なソフトウェアソリューションを協業環境で開発することを目指しています。"
      ],
      sections: {
        skills: {
          title: "主なスキル",
          items: [
            {
              icon: "fa-code",
              title: "プログラミング言語",
              subSkills: ["Java", "TypeScript", "SQL", "JavaScript", "HTML5", "CSS3"]
            },
            {
              icon: "fa-cubes",
              title: "フレームワーク & ライブラリ",
              subSkills: ["Spring Boot", "Hibernate", "Angular", "NestJS", "Node.js", "PrimeNG", "JUnit"]
            },
            {
              icon: "fa-tools",
              title: "ツール & プラットフォーム",
              subSkills: ["Maven", "Git", "Keycloak", "ActiveMQ", "AWS", "WildFly", "Nginx", "Linux", "SonarQube", "JProfiler"]
            },
            {
              icon: "fa-database",
              title: "データベース",
              subSkills: ["PostgreSQL", "MySQL", "MongoDB"]
            },
            {
              icon: "fa-shipping-fast",
              title: "DevOps & CI/CD",
              subSkills: ["Jenkins", "Docker", "CI/CDパイプライン", "Jira", "アジャイル/Scrum"]
            },
            {
              icon: "fa-project-diagram",
              title: "その他のスキル",
              subSkills: ["UMLモデリング", "RESTful API", "マイクロサービスアーキテクチャ", "パフォーマンス最適化"]
            }
          ]
        },
        experience: {
          title: "職務経験",
          positions: [
            {
              company: `
                CBTW 
                <a href="https://collaborationbetterstheworld.com" style="color: #fff; margin-left:0.5rem;" target="_blank">
                  <i class="fas fa-external-link-alt"></i>
                </a>,
                フルスタックJavaデベロッパー
              `,
              location: "ルクセンブルク | 2024年9月 ～ 現在",
              responsibilities: [
                "エンタープライズWeb開発：Java、Spring Boot、Angularを使用した企業向けアプリの設計・保守。",
                "アジャイル連携：アジャイル環境でのクロスファンクショナルチームとの協業。",
                "問題解決：複雑な技術的問題を特定・解決し、最適なパフォーマンスとユーザー体験を実現。",
                "コード品質：コードレビューとベストプラクティスの導入。"
              ],
              projects: []
            },
            {
              company: `
                VERMEG 
                <a href="https://www.vermeg.com" style="color: #fff; margin-left:0.5rem;" target="_blank">
                  <i class="fas fa-external-link-alt"></i>
                </a>,
                ソフトウェアエンジニア
              `,
              location: "チュニス、チュニジア | 2019年10月 ～ 2024年8月",
              responsibilities: [
                "テクニカルリーダーシップ：ジュニアメンバーを指導、重要コンポーネントを担当。",
                "システム統合：バックエンドとフロントエンドを高可用性・高性能・セキュリティ環境で統合。",
                "製品開発：複数アプリケーションのエンドツーエンド開発（バックエンド＆フロントエンド）。",
                "プロセス最適化：ボトルネックを特定し効率的なソリューションを実行。"
              ],
              projects: [
                {
                  name: "SalesFlow",
                  role: "リードデベロッパー",
                  shortDesc: "保険提案、オファー、エンドースメントを管理するワークフローシステム。",
                  details: [
                    "要件分析とクライアントワークショップ。",
                    "UMLモデリングとアーキテクチャ設計。",
                    "RESTful APIと動的UIの開発。",
                    "Camunda BPM中心のアーキテクチャへ移行。"
                  ]
                },
                {
                  name: "PackManager",
                  role: "バックエンドデベロッパー",
                  shortDesc: "保険商品を設定するプラットフォーム。オファーの作成やカスタマイズをサポート。",
                  details: [
                    "クライアント要件分析とUML開発。",
                    "主要機能とRESTful APIの実装。",
                    "リファクタリングでメンテナビリティ向上。",
                    "JProfilerによる性能最適化。"
                  ]
                },
                {
                  name: "Solife Digital Portal",
                  role: "フルスタックデベロッパー",
                  shortDesc: "ブローカー/代理店向け生命保険オファー契約管理ポータル。",
                  details: [
                    "AngularによるUI改修。",
                    "信頼性向上のためのマイクロサービス開発。",
                    "Linux VM管理（開発・テスト）。",
                    "コードレビューとジュニアメンター。"
                  ]
                },
                {
                  name: "Magikforms",
                  role: "バックエンドデベロッパー",
                  shortDesc: "デジタルフォームを作成・検証するプラットフォーム。ダッシュボードやKPI追跡機能付き。",
                  details: [
                    "フロントエンド向けJava Webサービスの実装。",
                    "ActiveMQを用いたバッチ処理。",
                    "Keycloak APIを使ったユーザー管理自動化。",
                    "JProfilerで高ボリューム処理を最適化。"
                  ]
                },
                {
                  name: "保険料金モジュール",
                  role: "フルスタックデベロッパー",
                  shortDesc: "各種保険商品の構成・料金算出を行うモジュール。",
                  details: [
                    "ステークホルダーへのヒアリングで機能要件を分析。",
                    "商品設定と保険料計算機能の設計。",
                    "Javaでアクチュアリー機能を実装しユニットテスト。",
                    "Apache POI / Excelでのデータ統合を最適化。",
                    "Angularでフロントエンドコンポーネントを実装。"
                  ]
                }
              ]
            }
          ]
        },
        education: {
          title: "学歴",
          items: [
            "ソフトウェアエンジニアリング学位 - ESPRIT (2019年9月～2023年7月)",
            "コンピュータサイエンス学士 - ISIMM (2015年9月～2019年6月)"
          ]
        },
        certifications: {
          title: "認定資格",
          items: [
            `Oracle Certified Professional, Java SE 11 Developer (2022年9月) -
             <a href="https://bit.ly/ocp11gb" target="_blank">bit.ly/ocp11gb</a>`
          ]
        },
        languages: {
          title: "言語",
          items: [
            "<b>アラビア語（母国語）</b>",
            "<b>英語（流暢）</b>",
            "<b>フランス語（流暢）</b>",
            "<b>日本語（基本的な会話力）</b>"
          ]
        }
      }
    }
  };
  
  /*********************************************************
   * SET LANGUAGE & RENDER
   *********************************************************/
  function setLanguage(lang) {
    const data = cvData[lang];
    const navData = langNav[lang];
    if (!data || !navData) return;
  
    /* ============ TRANSLATE NAV & FOOTER ETC. ============ */
    // Brand
    document.getElementById("nav-brand").innerHTML = `<i class="fas fa-terminal"></i> ${navData.brand}`;
  
    // Nav items
    const navLinksEl = document.getElementById("nav-links");
    navLinksEl.innerHTML = "";
    const sectionIDs = [
      "about-section",
      "skills-section",
      "experience-section",
      "education-section",
      "certifications-section",
      "languages-section"
    ];
    navData.navItems.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="#${sectionIDs[index]}">${item}</a>`;
      navLinksEl.appendChild(li);
    });
  
    // Download button text
    document.getElementById("download-btn-text").textContent = navData.downloadBtn;
    // Scroll down text
    document.getElementById("scroll-down-text").textContent = navData.scrollDown;
    // Footer text
    document.getElementById("footer-text").textContent = navData.footer;
  
    /* ============ TRANSLATE HERO DATA ============ */
    document.getElementById('hero-name').innerText = data.heroName;
    document.getElementById('hero-job').innerText = data.heroJob;
    document.getElementById('hero-location').innerText = data.heroLocation;
    document.getElementById('hero-phone').innerText = data.heroPhone;
    const heroEmail = document.getElementById('hero-email');
    heroEmail.textContent = data.heroEmail;
    heroEmail.href = `mailto:${data.heroEmail}`;
  
    // Force file download
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.onclick = () => {
      const link = document.createElement('a');
      link.href = data.pdf;
      link.download = data.pdf; // Force download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    // Build main content
    const contentEl = document.getElementById('content');
    let html = `
      <!-- ABOUT -->
      <section 
        id="about-section" 
        class="section animate-on-scroll fade-in-left" 
        style="background: var(--bg-about)">
        <h2 class="section-title">${data.aboutSectionTitle}</h2>
        ${data.aboutMe.map(para => `<div class="about-paragraph">${para}</div>`).join("")}
      </section>
  
      <!-- SKILLS -->
      <section 
        id="skills-section" 
        class="section animate-on-scroll fade-in-right"
        style="background: var(--bg-skills)">
        <h2 class="section-title">${data.sections.skills.title}</h2>
        <div class="skills-grid">
          ${data.sections.skills.items
            .map(item => `
              <div class="skill-card">
                <div class="skill-header">
                  <i class="fas ${item.icon}"></i>
                  <span class="skill-title">${item.title}</span>
                </div>
                <ul>
                  ${item.subSkills
                    .map(sk => `<li><i class="fas fa-check"></i> ${sk}</li>`)
                    .join("")}
                </ul>
              </div>
            `)
            .join("")}
        </div>
      </section>
  
      <!-- EXPERIENCE -->
      <section
        id="experience-section"
        class="section animate-on-scroll fade-in-up"
        style="background: var(--bg-experience)">
        <h2 class="section-title">${data.sections.experience.title}</h2>
        <div class="timeline">
          ${data.sections.experience.positions
            .map((pos, i) => `
              <div class="timeline-item">
                <div class="timeline-title">${pos.company}</div>
                <div class="timeline-period">${pos.location}</div>
                <ul>
                  ${pos.responsibilities
                    .map(r => `<li><i class="fas fa-angle-right"></i> ${r}</li>`)
                    .join("")}
                </ul>
                ${
                  pos.projects && pos.projects.length
                    ? pos.projects.map((proj, j) => `
                      <div class="project-card">
                        <div class="project-header">
                          <div>
                            <div class="project-name">${proj.name} - ${proj.role}</div>
                            <p class="project-short-desc">${proj.shortDesc}</p>
                          </div>
                          <button class="btn-details" onclick="toggleProjectDetails('details-${i}-${j}')">
                            See Details
                          </button>
                        </div>
                        <div id="details-${i}-${j}" class="project-details hidden">
                          <ul>
                            ${proj.details
                              .map(d => `<li><i class="fas fa-angle-double-right"></i> ${d}</li>`)
                              .join("")}
                          </ul>
                        </div>
                      </div>
                    `).join("")
                    : ""
                }
              </div>
            `)
            .join("")}
        </div>
      </section>
  
      <!-- EDUCATION -->
      <section
        id="education-section"
        class="section animate-on-scroll fade-in-left"
        style="background: var(--bg-education)">
        <h2 class="section-title">${data.sections.education.title}</h2>
        <div class="card-list">
          ${data.sections.education.items
            .map(item => `
              <div class="info-card">
                <div><i class="fas fa-graduation-cap"></i><span class="info-card-title"> Education</span></div>
                <p>${item}</p>
              </div>
            `)
            .join("")}
        </div>
      </section>
  
      <!-- CERTIFICATIONS -->
      <section
        id="certifications-section"
        class="section animate-on-scroll fade-in-right"
        style="background: var(--bg-certifications)">
        <h2 class="section-title">${data.sections.certifications.title}</h2>
        <div class="card-list">
          ${data.sections.certifications.items
            .map(cert => `
              <div class="info-card">
                <div><i class="fas fa-certificate"></i><span class="info-card-title"> Certification</span></div>
                <p>${cert}</p>
              </div>
            `)
            .join("")}
        </div>
      </section>
  
      <!-- LANGUAGES -->
      <section
        id="languages-section"
        class="section animate-on-scroll fade-in-up"
        style="background: var(--bg-languages)">
        <h2 class="section-title">${data.sections.languages.title}</h2>
        <div class="card-list">
          ${data.sections.languages.items
            .map(lang => `
              <div class="info-card">
                <p>${lang}</p>
              </div>
            `)
            .join("")}
        </div>
      </section>
    `;
  
    contentEl.innerHTML = html;
  
    // Observe all .animate-on-scroll sections and .section-title
    // for repeated fade in/out
    document.querySelectorAll('.animate-on-scroll, .section-title').forEach(el => {
      observer.observe(el);
    });
  }
  
  /*********************************************************
   * Auto-Detect browser language
   *********************************************************/
  function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('fr')) {
      return 'fr';
    } else if (userLang.startsWith('ja')) {
      return 'jp';
    } else {
      return 'en';
    }
  }
  
  // On DOM load, set default language
  window.addEventListener('DOMContentLoaded', () => {
    const defaultLang = detectLanguage();
    setLanguage(defaultLang);
  });
  