<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="20%" alt="COCO-PORTFOLIO-V2-logo">
</p>
<p align="center">
    <h1 align="center">COCO-PORTFOLIO-V2</h1>
</p>
<p align="center">
    <em>Empowering seamless web experiences with precision.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/coco40725/coco-portfolio-v2?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/coco40725/coco-portfolio-v2?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/coco40725/coco-portfolio-v2?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/coco40725/coco-portfolio-v2?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

coco-portfolio-v2 is a visually captivating web application that showcases a software developer's skills, projects, and experience. It offers a seamless user experience with multilingual support and engaging animations. Ideal for developers looking to create a professional online presence.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Utilizes **Vue.js** as the primary language for frontend development.</li><li>Configured with **TypeScript** for type safety and enhanced developer experience.</li><li>Integrates **Gulp** for image optimization and deployment automation to **Google Cloud Storage**.</li><li>Employs **Vite** for fast and efficient development and build processes.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Maintains consistent and reliable dependencies using **package-lock.json**.</li><li>Enforces strict linting rules and path aliases through **tsconfig.json**.</li><li>Enhances styling capabilities and cross-browser compatibility with **PostCSS** plugins.</li><li>Defines global components in **src/components.d.ts** for improved modularity and maintainability.</li></ul> |
| 📄 | **Documentation** | <ul><li>Provides multilingual support with translations in **common.json**, **en.json**, and **zh.json**.</li><li>Exports an internationalization instance using **vue-i18n** in **src/i18n/index.ts**.</li><li>Defines Vue router configuration in **src/router/index.ts** for seamless navigation.</li><li>Automates production deployment with **GitHub Actions** in **.github/workflows/deploy-to-prod.yml**.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates **PrimeVue** for UI components and themes.</li><li>Facilitates event handling across components using the **mitt** library in **src/lib/EventBus.ts**.</li><li>Enables language selection with **vue-i18n** in **src/components/header/SelectLanguage.vue**.</li><li>Utilizes **Vue Router** and **Vuex** for seamless navigation in **src/components/header/Nav.vue**.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Defines reusable components like **DefaultButton.vue** for consistent UI elements.</li><li>Centralizes language resources in **common.json**, **en.json**, and **zh.json** for seamless user experience.</li><li>Enhances code organization with path aliases and strict type checking in **tsconfig.app.json**.</li><li>Facilitates component communication and state management with **Pinia** in **src/store/nav.store.ts**.</li></ul> |
| 🧪 | **Testing**       | <ul><li>Implements scroll behavior testing in **src/App.vue** for navigation updates.</li><li>Supports hot module replacement testing in **src/components/HelloWorld.vue** for interactive elements.</li><li>Enhances user experience with dynamic content rendering in **src/components/HelloWorld.vue**.</li><li>Ensures smooth transitions and hover effects in **src/page/service/Service.vue** for improved user interaction.</li></ul> |

---

##  Project Structure

```sh
└── coco-portfolio-v2/
    ├── .github
    │   └── workflows
    ├── README.md
    ├── gulpfile.mjs
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.vue
    │   ├── assets
    │   ├── components
    │   ├── components.d.ts
    │   ├── i18n
    │   ├── lib
    │   ├── main.ts
    │   ├── page
    │   ├── router
    │   ├── store
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```


###  Project Index
<details open>
	<summary><b><code>COCO-PORTFOLIO-V2/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The `package-lock.json` file in the project structure defines the dependencies and their versions required for the "coco-portfolio-v2" project<br>- It ensures that the project uses specific versions of libraries like "@google-cloud/storage", "@primevue/themes", "gsap", "gulp", and others<br>- This file plays a crucial role in maintaining consistent and reliable dependencies for the project's architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- Manages TypeScript configuration for linting and path mapping across the project structure<br>- References specific configuration files for app and node environments<br>- Excludes node_modules and dist directories.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/gulpfile.mjs'>gulpfile.mjs</a></b></td>
				<td>- Facilitates image optimization and deployment to Google Cloud Storage<br>- Finds all files in the 'dist' directory, uploads them to a specified bucket, and sets cache control<br>- Includes tasks for image minification, GCS upload to test and production environments, and deployment automation.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td>- The `tailwind.config.js` file in the project architecture defines the configuration for Tailwind CSS, specifying the content to style across HTML and various JavaScript and TypeScript files<br>- It also sets the dark mode to be based on the user's system preference and includes custom theme settings such as accent colors and animations<br>- This file plays a crucial role in defining the visual styling and theming aspects of the project.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/tsconfig.app.json'>tsconfig.app.json</a></b></td>
				<td>- Define the target ECMAScript version and module resolution strategy for the project's TypeScript codebase<br>- Configure compiler options to support modern features and bundler mode<br>- Ensure compatibility with ES2020 and DOM libraries, while enabling importing TypeScript extensions and preserving JSX syntax<br>- Maintain strict linting rules and path aliases for cleaner code organization.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/tsconfig.node.json'>tsconfig.node.json</a></b></td>
				<td>- Configures TypeScript compiler options for the project to target ES2022, use ES2023 library, and module resolution in bundler mode<br>- Enables strict type checking, bundler-specific settings, and Vite client types.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/vite.config.ts'>vite.config.ts</a></b></td>
				<td>- Configures Vite build settings, Vue components, and PrimeVue integration<br>- Resolves component imports and generates type declarations<br>- Sets up asset output paths and base URL for the project.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/package.json'>package.json</a></b></td>
				<td>- Manage project dependencies and build scripts for deployment and development using Vite and Gulp<br>- Key dependencies include Vue, GSAP, PrimeVue, and Google Cloud Storage<br>- The package.json file defines project metadata, scripts for building and deploying to different environments, and lists dependencies and devDependencies.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/index.html'>index.html</a></b></td>
				<td>Defines the main HTML structure for the Coco Web project, setting up the initial layout and linking to the main TypeScript file for functionality.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/postcss.config.js'>postcss.config.js</a></b></td>
				<td>Configures PostCSS plugins Tailwind CSS and Autoprefixer for the project's build process, enhancing styling capabilities and ensuring cross-browser compatibility.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/vite-env.d.ts'>vite-env.d.ts</a></b></td>
				<td>Defines Vite client types for the project, ensuring seamless integration with Vite's development server.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/components.d.ts'>components.d.ts</a></b></td>
				<td>- Defines global components for Vue, specifying their types and imports<br>- Facilitates seamless integration of components across the codebase, enhancing modularity and maintainability.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/App.vue'>App.vue</a></b></td>
				<td>Implements scroll behavior to update navigation based on page position.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/main.ts'>main.ts</a></b></td>
				<td>- Initialize Vue app with Pinia state management, PrimeVue UI components, and Aura theme<br>- Mount the app on the DOM after router is ready, utilizing i18n for internationalization.</td>
			</tr>
			</table>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/components/HelloWorld.vue'>HelloWorld.vue</a></b></td>
						<td>- Enables dynamic content rendering and user interaction in the Vue component 'HelloWorld.vue'<br>- Manages a message display, a counter, and links for further exploration<br>- Supports hot module replacement testing and provides resources for Vue and Vite tooling<br>- Enhances user experience and encourages learning through interactive elements and informative links.</td>
					</tr>
					</table>
					<details>
						<summary><b>ui</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/components/ui/DefaultButton.vue'>DefaultButton.vue</a></b></td>
								<td>- Defines a reusable button component with customizable styles and sizes<br>- Validates and applies specified button variants and sizes based on props<br>- Encapsulates button logic and styling for consistent UI elements across the project.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>header</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/components/header/Header.vue'>Header.vue</a></b></td>
								<td>Improve header styling and navigation layout for the project's frontend interface.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/components/header/Nav.vue'>Nav.vue</a></b></td>
								<td>Manages navigation links and styling based on the current page, leveraging Vue Router and Vuex store for seamless user experience.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/components/header/MobileNav.vue'>MobileNav.vue</a></b></td>
								<td>- Implements mobile navigation functionality for the project, managing menu state and navigation actions based on user interactions<br>- Uses Vue composition API and Vuex store for seamless navigation experience<br>- Enables users to easily access different sections of the application with a responsive and intuitive mobile menu interface.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/components/header/SelectLanguage.vue'>SelectLanguage.vue</a></b></td>
								<td>- Enables language selection functionality in the header component, allowing users to switch between traditional Chinese and English<br>- The code leverages Vue.js and vue-i18n to manage language preferences seamlessly within the project architecture.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>lib</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/lib/EventBus.ts'>EventBus.ts</a></b></td>
						<td>Facilitates event handling and communication across components using the mitt library.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>i18n</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/i18n/common.json'>common.json</a></b></td>
						<td>- Enables multilingual support by providing translations for the "welcome" message in both Chinese and English<br>- This file plays a crucial role in the project's architecture by centralizing language resources, ensuring a seamless user experience across different language preferences.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/i18n/index.ts'>index.ts</a></b></td>
						<td>Exports an internationalization instance using vue-i18n, supporting Chinese and English locales with common messages.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/i18n/en.json'>en.json</a></b></td>
						<td>- Define the content structure and text for the English language internationalization file in the project, focusing on introducing Coco, showcasing skills, navigation items, work experience, and project descriptions<br>- The file also includes a link to Coco's software engineering CV.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/i18n/zh.json'>zh.json</a></b></td>
						<td>- Define internationalization strings for a multilingual web application, including content for introduction, skills, navigation, experience, and projects<br>- The file serves as a central repository for text displayed to users in Chinese, ensuring a seamless user experience across the application.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>store</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/store/nav.store.ts'>nav.store.ts</a></b></td>
						<td>- Defines a Pinia store for navigation, managing the current navigation state and providing methods to update it<br>- The store includes a list of all available navigation items and allows setting the current navigation item<br>- This file plays a crucial role in handling navigation-related logic within the project architecture.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>router</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/router/index.ts'>index.ts</a></b></td>
						<td>- Defines Vue router configuration with routes for Home, Service, Experience, Project, and Contact pages<br>- Creates router instance using Vue Router library with web history mode<br>- Facilitates navigation within the Vue.js application by mapping URLs to corresponding components.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>page</b></summary>
				<blockquote>
					<details>
						<summary><b>home</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/page/home/Skill.vue'>Skill.vue</a></b></td>
								<td>- Displays a list of skills with corresponding icons on the home page, enhancing the visual appeal and user experience of the application<br>- The code in Skill.vue file populates and renders the skills dynamically, contributing to a more engaging and informative interface for showcasing expertise and technologies used in the project.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/page/home/Photo.vue'>Photo.vue</a></b></td>
								<td>- Animate the profile image container on the home page using GSAP and Vue on mount<br>- The animation gradually reveals the image with a gradient stroke effect, enhancing the visual appeal of the page.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/page/home/Stats.vue'>Stats.vue</a></b></td>
								<td>- Displays and animates statistics on the home page using Vue CountUp library<br>- The Stats.vue file defines the data structure for years of experience and projects, rendering them dynamically with CountUp animations<br>- This component enhances the user experience by showcasing key metrics in an engaging and visually appealing manner.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/page/home/Home.vue'>Home.vue</a></b></td>
								<td>- Defines the layout and content for the home page, showcasing the profile, introduction, and social links<br>- It structures the elements in a responsive design, ensuring a visually appealing presentation of the software developer's information and skills.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>experience</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/page/experience/Experience.vue'>Experience.vue</a></b></td>
								<td>- Displays a dynamic timeline of work experience with detailed descriptions and tags<br>- The component leverages Vue.js for rendering and i18n for localization, providing a visually appealing and informative section for showcasing professional background.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>contact</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/page/contact/Contact.vue'>Contact.vue</a></b></td>
								<td>- Defines contact information and services for the website's contact page, facilitating direct communication with visitors<br>- Displays email, address, and service details, enabling users to reach out for collaboration or inquiries<br>- The structured layout enhances user experience and engagement on the platform.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>project</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/page/project/Project.vue'>Project.vue</a></b></td>
								<td>- Manages project details and navigation within the Vue component, displaying project information, stack, live links, and GitHub repositories<br>- Enables users to cycle through projects and view associated content seamlessly.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>service</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/src/page/service/Service.vue'>Service.vue</a></b></td>
								<td>- Defines and populates services for display in a Vue component<br>- Displays various service categories with corresponding descriptions and links<br>- Supports smooth transitions and hover effects for enhanced user experience.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- .github Submodule -->
		<summary><b>.github</b></summary>
		<blockquote>
			<details>
				<summary><b>workflows</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/coco40725/coco-portfolio-v2/blob/master/.github/workflows/deploy-to-prod.yml'>deploy-to-prod.yml</a></b></td>
						<td>- Automate production deployment workflow for the project using GitHub Actions<br>- Run tests and deploy to production on tagged pushes<br>- Set up Node.js environment, install dependencies, and deploy to production server.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with coco-portfolio-v2, ensure your runtime environment meets the following requirements:

- **Programming Language:** Vue.js
- **Package Manager:** Npm


###  Installation

Install coco-portfolio-v2 using one of the following methods:

**Build from source:**

1. Clone the coco-portfolio-v2 repository:
```sh
❯ git clone https://github.com/coco40725/coco-portfolio-v2
```

2. Navigate to the project directory:
```sh
❯ cd coco-portfolio-v2
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT INSTALL COMMAND HERE'
```




###  Usage
Run coco-portfolio-v2 using the following command:
**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT RUN COMMAND HERE'
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT TEST COMMAND HERE'
```


---
##  Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/coco40725/coco-portfolio-v2/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/coco40725/coco-portfolio-v2/issues)**: Submit bugs found or log feature requests for the `coco-portfolio-v2` project.
- **💡 [Submit Pull Requests](https://github.com/coco40725/coco-portfolio-v2/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/coco40725/coco-portfolio-v2
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/coco40725/coco-portfolio-v2/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=coco40725/coco-portfolio-v2">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
