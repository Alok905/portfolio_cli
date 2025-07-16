import { portfolioData } from "../../data/portfolio";

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
        return "\x1b[2J\x1b[H"; // ANSI clear screen

      case "whoami":
        return portfolioData.commands.whoami;

      case "ls":
        return "📄 about.txt  📁 projects/  💼 experience/  🎓 education/  🛠️ skills.json  📧 contact.md";

      case "pwd":
        return "/home/alok/portfolio";

      case "date":
        return new Date().toString();

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
🛠️  skills      - Technical skills
📧 contact     - Get in touch
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

    return `Education
${"=".repeat(40)}

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
    return `About ${personal.name}
${"=".repeat(40)}

${about}

Location: ${personal.location}
Title: ${personal.title}

"Code is poetry written in logic." 💭`;
  }

  private static formatProjects(): string {
    const { projects } = portfolioData;

    return `My Projects
${"=".repeat(40)}

${projects
  .map(
    (project, index) => `
📦 ${project.name} ${project.status === "in-progress" ? "🚧" : "✅"} 
   🔖 Type: ${project.type}
   📝 ${project.description}
   
   🛠️ Tech Stack: ${project.stack.join(" • ")}
   ${project.github ? `🔗 GitHub: ${project.github}` : ""}
   ${project.demo ? `🌐 Demo: ${project.demo}` : ""}
   ${"─".repeat(40)}
`
  )
  .join("")}

📊 Total Projects: ${projects.length}`;
  }

  private static formatExperience(): string {
    const { experience } = portfolioData;

    return `Work Experience
${"=".repeat(40)}

${experience
  .map(
    (exp, index) => `
🏢 ${exp.company}
   Position: ${exp.role}
   Duration: ${exp.duration}
   
   ${exp.description}
   
   Technologies: ${exp.technologies.join(" • ")}
   
   Key Achievements:
   ${exp.achievements.map((achievement) => `   ✓ ${achievement}`).join("\n")}
   
   ${"─".repeat(35)}
`
  )
  .join("")}`;
  }

  private static formatSkills(): string {
    const { skills } = portfolioData;

    return `Technical Skills
${"=".repeat(40)}

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

  private static formatContact(): string {
    const { personal } = portfolioData;

    return `Contact Information
${"=".repeat(40)}

📧 Email: ${personal.email}
📱 Mobile: ${personal.mobile}
🐙 GitHub: ${personal.github}
💼 LinkedIn: ${personal.linkedin}
📍 Location: ${personal.location}

💡 Open to new opportunities!
📞 Feel free to reach out for collaborations.
🤝 Let's build something amazing together!`;
  }
}
