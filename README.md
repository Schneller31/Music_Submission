# Music Submission 🎵

A lightweight, serverless song request system built with **Google Apps Script** and **Google Sheets**.

---

## Features

- **Real-time Storage:** Requests are instantly saved to a Google Spreadsheet
- **Admin Dashboard:** A protected area to view current requests
- **Analytics:** Automatically calculates a "Top 10" list of the most requested songs
- **Management:** Delete entries directly from the admin interface

---

## 🛠️ Setup Instructions

Follow these steps to get your own version up and running:

### 1. Prepare the Spreadsheet
1. Create a new [Google Sheet](https://sheets.new)
2. Name the first sheet (tab) `Sheet1`
3. Create the following headers in the first row:
   - `A1: Timestamp` | `B1: Song` | `C1: Artist` | `D1: Class/Grade`
4. Copy the **ID** of your spreadsheet from the URL:
   `https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit`

### 2. Set up the Script
1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Create three files in the editor:
   - `Code.gs`: Paste the code from the `Code.gs` file in this repository
   - `index.html`: Paste the code from the `index.html` file
   - `admin.html`: Paste the code from the `admin.html` file
3. In `Code.gs`, replace `GOOGLE SHEET ID MUST BE ENTERED HERE` with your actual Spreadsheet ID (Line 10, 25, 65, 81, 112, 117)
4. In `admin.html`, set your desired password in the `PASSWORD` variable (Line 73)

### 3. Deploy as Web App
1. Click the **Deploy** button (top right) > **New deployment**
2. Select type: **Web app**
3. Description: `SheetRequests v1`
4. Execute as: **Me**
5. Who has access: **Anyone** (this allows people without a Google account to access this website)
6. Click **Deploy** and authorize the permissions.
7. **IMPORTANT:** Copy the "Web App URL" provided.

### 4. Connect Frontend to Backend
1. Open your `index.html` in the Apps Script editor
2. Find the line `const scriptURL = "WEB APP URL MUST BE INSERTED HERE";` (Line 58)
3. Paste your Web App URL between the quotes
4. Go to `admin.html` and update the navigation links with your Web App URL and Spreadsheet URL
5. **Redeploy:** Click **Deploy** > **Manage deployments** > **Edit** (pencil icon) > Select **New version** > **Deploy**

---

## 🎨 Customization Guide

* **Titles & Headers:** In `index.html`, you can change the main heading and description in lines 42 and 43
* **Form Labels:** In `index.html` (lines 46–48), update the `placeholder` attributes to change what users see inside the input boxes
* **Status Messages:** In `index.html`, customize the success message (line 80) and the error message (line 88)
* **Admin Buttons:** In `admin.html`, you can rename the navigation buttons in lines 50 and 53
* **Colors:** Search for `background` or Hex codes (like `#ff6b81`) in the `<style>` section of both `index.html` and `admin.html` to match your event's color theme
* **Fonts:** Change the `font-family` in the CSS to use a different look
* **Spam Protection:** In `index.html` (line 65), change `let timeLeft = 5;` to a higher value if you want to increase the waiting time between submissions
* **Input Validation:** In `index.html` (line 48), you can adjust the `min` and `max` values for the grade/class input to match your school's structure
* **Required Fields:** Add or remove the `required` attribute in the `<input>` tags in `index.html` to decide which information is mandatory
* **Top List Size:** In `Code.gs`, find the `.slice(0, 10)` part. Change `10` to any number (e.g., `5` or `20`) to display more or fewer songs in your leaderboard
* **Password:** In `admin.html`, change the `SECRET` variable to your own private password before deploying

---

## 📖 How to use

- **User Page:** Share the Web App URL with your guests
- **Admin Page:** Add `?page=admin` to the end of your Web App URL to access the dashboard
  - Example: `https://script.google.com/.../exec?page=admin`

---

## 🔒 Security Note

The site is extremely simple and straightforward in its design, which is why complete security cannot be guaranteed.