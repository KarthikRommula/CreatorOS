# Daily Brief - Creator Dashboard

A comprehensive dashboard for content creators to manage analytics, optimize videos, track trends, and monitor competitors.

## 📱 Dashboard Tabs & Features

The application is structured into four main tabs, each serving a distinct workflow phase for the creator.

### 1. Home (Analytics)

**Component:** `components/channel-stats.tsx`
_Your command center for channel health and performance._

- **Active Subscribers Card**: Displays real-time subscriber count, "Joined today" statistics, and a visual growth sparkline.
- **Views & Watch Time Cards**: Key performance indicators for the last 28 days, featuring mini-charts for trend analysis.
- **Top Performing Content**: A detailed list of your best videos, highlighted with "Why it's performing" badges (e.g., _Evergreen_, _High Retention_) and specific metrics like 42% retention or 12% CTR.

### 2. Latest Video (Studio)

**Component:** `components/video-grader.tsx`
_AI-powered optimization suite for your latest upload._

- **Video Player**: A fully mocked video interface with playback controls and a timeline.
- **Metadata Editor**: Tabbed input areas to refine your **Title**, **Description**, and **Tags**.
- **AI Assistant Side-Panel**:
  - **Optimization Score**: A 0-100 rating of your video's potential.
  - **Checklist Analyzers**: Sections breaking down "Key Strengths" and "Improvements" to make before publishing.
  - **Transcript & Chapters**: Tools to manage video structure and accessibility.

### 3. Trend Watch

**Component:** `components/trend-watch.tsx`
_Data-driven content inspiration engine._

- **Trending Topics Card**: A feed of rising market trends.
  - **Growth Metrics**: Percentage growth indicators (e.g., +85%).
  - **Context**: AI summaries explaining _why_ a topic is trending.
  - **Sources UI**: Verifiable citations (e.g., TechCrunch, Reddit) displayed as an interactive "Sources" dropdown with favicons.
- **Audience Requests Card**: Aggregated demands from your community.
  - **Comment Evidence**: Clickable request counts that open a **Dialog** showing actual user comments verifying the demand.

### 4. Intel (Competitors & Opportunities)

**Component:** `components/competitor-intel.tsx`
_Strategic intelligence for growth and monetization._

- **Market Pulse Banner**: Top-level indicators for High Competitor Activity, New Collab Openings, and Active Deals.
- **Competitor Watch Card**:
  - **Activity Feed**: Tracks significant moves by competitors (e.g., "Released AI Agents course").
  - **AI Strategy**: Provides actionable counter-strategies (e.g., "Create a reaction video").
- **Opportunities Section**:
  - **Collaboration Match**: Suggests creators with high audience overlap. Features a **Connect** button that opens a pre-drafted email preview dialog.
  - **High-Value Sponsors**: Lists active brand deals in your niche with estimated payout ranges (e.g., $2k - $5k).
