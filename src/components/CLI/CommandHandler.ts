import { portfolioData } from "../../data/portfolio";
import resumeFile from "../../assets/RESUME.pdf";

export class CommandHandler {
  static processCommand(command: string): string {
    const cmd = command.toLowerCase().trim();

    switch (cmd) {
      case "help":
        return this.formatHelp();

      case "about":
        return this.formatAbout();

      case "projects":
        return this.formatProjects();

      case "experience":
      case "exp":
        return this.formatExperience();

      case "education":
      case "edu":
        return this.formatEducation();

      case "skills":
        return this.formatSkills();

      case "contact":
        return this.formatContact();

      case "clear":
        return "CLEAR_HISTORY"; // Special flag to clear history

      case "whoami":
        return portfolioData.commands.whoami;

      case "ls":
        return "📄 about.txt  📁 projects/  💼 experience/  🎓 education/  🛠️ skills.json  📧 contact.md";

      case "pwd":
        return "/home/alok/portfolio";

      case "date":
        return new Date().toString();

      case "resume":
        return this.formatResume();

      default:
        return `Command not found: ${command}
Type 'help' to see available commands.`;
    }
  }

  private static formatHelp(): string {
    return `Available Commands:
    
🔍 help        - Show this help message
👨‍💻 about       - Learn about me
🚀 projects    - View my projects
💼 experience  - My work experience
🎓 education   - My educational background
🛠️ skills      - Technical skills
📧 contact     - Get in touch
📄 resume      - Download my resume
🧹 clear       - Clear terminal
🔍 whoami      - Who are you?

Navigation:
📂 ls          - List directory contents
📍 pwd         - Show current directory
📅 date        - Show current date

Tip: Commands are case-insensitive!`;
  }

  private static formatEducation(): string {
    const { education } = portfolioData;

    return `
<span class="font-bold">Education
${"=".repeat(40)}
</span>
${education
  .map(
    (edu, index) => `
🎓 ${edu.institution}
   Degree: ${edu.degree}
   Duration: ${edu.duration}
   ${edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
   📍 Location: ${edu.location}
   
   ${"─".repeat(35)}
`
  )
  .join("")}`;
  }

  private static formatAbout(): string {
    const { personal, about } = portfolioData;
    return `
<span class="font-bold">About ${personal.name}
${"=".repeat(40)}
</span>
${about}

Location: ${personal.location}
Title: ${personal.title}

"Code is poetry written in logic." 💭`;
  }

  private static formatProjects(): string {
    const { projects } = portfolioData;

    return `
<span class="font-bold">My Projects
${"=".repeat(40)}
</span>
${projects
  .map(
    (project, index) => `
📦 ${project.name} ${
      project.status === "in-progress" ? "🚧 (in-progress)" : "✅ (completed)"
    } 
   🔖 Type: ${project.type}
   📝 ${project.description}
   
   🛠️ Tech Stack: ${project.stack.join(" • ")}
   ${
     project.demo
       ? `🌐 Demo: <a href="${project.demo}" target="_blank" class="text-[#3ff] hover:underline">${project.demo}</a>`
       : ""
   }
   ${"─".repeat(40)}
`
  )
  .join("")}

📊 Total Projects: ${projects.length}`;
  }

  private static formatExperience(): string {
    const { experience } = portfolioData;

    return `
<span class="font-bold">Work Experience
${"=".repeat(40)}
</span>
${experience
  .map(
    (exp, index) => `
🏢 ${exp.company}
   👨‍💻 Position: ${exp.role}
   🗓️ Duration: ${exp.duration}
   
   🛠️ Description: ${exp.description}
   
   🚀 Technologies: ${exp.technologies.join(" • ")}
   
   🎯 Key Achievements:
${exp.achievements.map((achievement) => `      ✔️ ${achievement}`).join("\n")}
   
   ${"─".repeat(35)}
`
  )
  .join("")}`;
  }

  private static formatSkills(): string {
    const { skills } = portfolioData;

    return `
<span class="font-bold">Technical Skills
${"=".repeat(40)}</span>

💻 Programming Languages
   ${skills.programming.join(" • ")}

🌐 Web Development
   ${skills.webDevelopment.join(" • ")}

🗃️ Database Technologies
   ${skills.database.join(" • ")}

🌍 Networking & Protocols
   ${skills.networkingProtocols.join(" • ")}

☁️ DevOps & Cloud
   ${skills.devopsTools.join(" • ")}

🛠️ Tools & Platforms
   ${skills.toolsPlatforms.join(" • ")}

🤝 Soft Skills
   ${skills.softSkills.join(" • ")}

Skill Level: ████████░░ 85% (Always learning!)`;
  }

  private static formatResume(): string {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    return `
<span class="font-bold">Download Resume
${"=".repeat(40)}
</span>

📄 Click here to download my resume:
<a href="${resumeFile}" download="RESUME.pdf" class="text-[#3ff] hover:underline">RESUME</a>

Type any command to continue...`;
  }

  private static formatContact(): string {
    const { personal } = portfolioData;

    return `
<span class="font-bold">Contact Information
${"=".repeat(40)}
</span>
📧 Email: <a href="mailto:${
      personal.email
    }" class="text-[#3ff] hover:underline">${personal.email}</a>
📱 Mobile: ${personal.mobile}
🐙 GitHub: <a href="${
      personal.github
    }" target="_blank" class="text-[#3ff] hover:underline">${
      personal.github
    }</a>
💼 LinkedIn: <a href="${
      personal.linkedin
    }" target="_blank" class="text-[#3ff] hover:underline">${
      personal.linkedin
    }</a>
📍 Location: ${personal.location}

💡 Open to new opportunities!
📞 Feel free to reach out for collaborations.
🤝 Let's build something amazing together!`;
  }
}
