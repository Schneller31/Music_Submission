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
2. Name the Sheet as you want
(2.1 Create the following headers in the first row:
   - `A1: Timestamp` | `B1: Song` | `C1: Artist` | `D1: Class/Grade`)
3. Copy the **ID** of your spreadsheet from the URL:
   `https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit`

### 2. Set up the Script
1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Create three files in the editor:
   - `Code.gs`: Paste the code from the `Code.gs` file in this repository
   - `index.html`: Paste the code from the `index.html` file
   - `admin.html`: Paste the code from the `admin.html` file
3. In `Code.gs`, replace `GOOGLE SHEET ID MUST BE ENTERED HERE` with your actual Spreadsheet ID (Line 10, 25, 60)
4. In `admin.html`, set your desired password in the `PASSWORD` variable (Line 72)

### 3. Deploy as Web App
1. Click the **Deploy** button (top right) > **New deployment**
2. Select type: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone** (this allows people without a Google account to access this website)
5. Click **Deploy** and authorize the permissions.
6. **IMPORTANT:** Copy the "Web App URL" provided.

### 4. Connect Google Sheets with Scripts
1. Open your `index.html` in the Apps Script editor
2. Find the line `const scriptURL = "WEB APP URL MUST BE INSERTED HERE";` (Line 58)
3. Paste your Web App URL between the quotes
4. Go to `admin.html` and update the navigation links with your Web App URL and Spreadsheet URL
5. **Redeploy:** Click **Deploy** > **Manage deployments** > **Edit** (pencil icon) > Select **New version** > **Deploy**

---

## 🎨 Customization Guide

* **Titles & Headers:** Change the main title and description in `index.html` (lines 42–43) and the Admin Dashboard title in `admin.html` (line 51)
* **Form Placeholders:** Update the hints inside the input fields in `index.html` (lines 46–48) to change what users see before they start typing
* **Status & Error Messages:** Customize the submission confirmation and error text in `index.html` (lines 80 and 88)
* **Navigation Links:** In `admin.html` (lines 54 and 57), replace the placeholder text and URLs for your live website and your Google Sheet
* **Refresh Button:** Rename or restyle the "Data Refresh" button in `admin.html` (line 60)
* **Spam Protection:** Adjust the `setTimeout` value in `index.html` (line 82) to change how long the success message stays visible before the button is re-enabled
* **Colors & Theme:** Edit the CSS variables and Hex codes in the `<style>` block of both HTML files to match your event's branding
* **Grade/Class Range:** Modify the `min` and `max` attributes in `index.html` (line 48) to fit your school's specific grade levels
* **Top List Size:** In `Code.gs`, find the `.slice(0, 10)` value in the `getAdminData` function to show more or fewer songs in your leaderboard
* **Admin Password:** Set your private login password by changing the `SECRET` variable in `admin.html` (line 74)

---

## 📖 How to use

- **User Page:** Share the Web App URL with your guests
- **Admin Page:** Add `?page=admin` to the end of your Web App URL to access the dashboard
  - Example: `https://script.google.com/.../exec?page=admin`

---

## 🔒 Security Note

The site is extremely simple and straightforward in its design, which is why complete security cannot be guaranteed.