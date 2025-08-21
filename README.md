
## <a name="tech-stack">⚙️ Tech Stack</a>

- Node.js
- Express.js
- MongoDB

## <a name="features">🔋 Features</a>

 **Advanced Rate Limiting and Bot Protection**: with Arcjet that helps you secure the whole app.

 **Database Modeling**: Models and relationships using MongoDB & Mongoose.

 **JWT Authentication**: User CRUD operations and subscription management.

 **Global Error Handling**: Input validation and middleware integration.

 **Logging Mechanisms**: For better debugging and monitoring.

 **Email Reminders**: Automating smart email reminders with workflows using Upstash.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/cygon23/subscription_tracking.git
cd subscription_tracking
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5500](http://localhost:5500) in your browser or any HTTP client to test the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>Dummy JSON Data</code></summary>

```json
{
	"name":"morning",
	"price": 26.00,
	"currency":"USD",
	"frequency": "weekly",
	"category":"news",
	"startDate": "2025-07-19T00:00:00.000Z",
	"paymentMethod": "Creadit card"
}
```