# My Experience with WebDev
I first got into web development back in 9th grade and continued through 10th. During that time, I built a few small websites and even participated in a hackathon. Eventually though, like most people preparing for boards and JEE, I had to leave it aside. Academics took over, but even after that phase, web development was always something I liked and wanted to come back to.


Recently, I decided to properly restart that journey and began working on rebuilding my fundamentals. Right now, I’m following The Odin Project, which has been helping me relearn things in a more structured way. When this opportunity came up, I honestly wasn’t planning to submit anything for this domain. I was at home, short on time, and didn’t feel confident about making a proper site for someone as big as Virat Kohli. I had also put in a lot of effort into competitive programming (CodeChef), which didn’t really go the way I expected, so motivation was low.

Then, a day before submission, I just thought — I’m learning web dev anyway, why not treat this as an assignment and submit whatever I manage to build? No pressure, no expectations. That’s how this project started.

# Journey of this project
Initially, I made it a point not to use AI at all. I wanted to see how far I could go on my own. But pretty quickly, some sections made me feel completely stuck, and avoiding help altogether didn’t really make sense. So I did use AI at multiple points — but always with the goal of understanding what was happening, not just copying code blindly.

The header was reused from a landing page project I had built about a week earlier. I adjusted it to fit this site, which actually helped reinforce the idea that code reuse is normal and useful. The hero section itself was simple, but I spent a lot of time adjusting spacing and positioning, especially around the quote. That small section taught me a lot about visual balance and fine-tuning layouts.

The marquee stats section took way longer than I expected because I had basically forgotten how Flexbox works. It was frustrating at first, but once I pushed through, it ended up being a really good revision of flex direction, alignment, spacing, and general layout rules. That section alone helped refresh a lot of basics I didn’t realise I had forgotten.

The next section, the timeline, was where I genuinely had no clue how to proceed. I had a clear visual idea in my head but didn’t know how to translate it into code. So yeah, I used AI here. After some tweaking, it worked visually, but the CSS felt intimidating. Initially, I thought I’d understand it later, but I knew that “later” would never come. So I forced myself to sit down and go through it line by line.

That turned out to be one of the most useful parts of the entire project. I finally understood how position: relative and absolute actually work in real layouts, how elements position themselves with respect to their parents, and how pseudo-elements like ::before can be used in clever ways to build complex-looking designs. It made me realise that most “complex” layouts are just simple rules used smartly.

For the statistics section, I wanted graphs instead of just plain numbers. My first idea was to create graphs in Excel and import them, but that felt very static and disconnected. While searching for alternatives, I came across Chart.js. I had no idea how it worked, so I relied on AI to help me generate an initial setup. That’s how I got introduced to using external libraries, data-driven components, and basic JS–DOM interaction for visuals.

Displaying large amounts of stats was another challenge. My first version used unordered lists styled as cards, and honestly, it looked horrible. Instead of trying to fix it randomly, I paused and first designed how I wanted the cards to look. Once the design was clear, coding them became much easier, and the final version was significantly better.

While working on stats, I also started thinking about the gallery section. I’m not very confident with image-heavy layouts, so I created a rough visual reference and asked AI to help convert it into code. After multiple iterations and tweaks, it finally worked. Through this section, I learned about image sizing, overlays, background handling, and also how to properly use icons with Font Awesome.

The social media section was another good Flexbox learning moment, especially for alignment and hover effects. For some reason, I ended up building the footer before the site was fully finished — it was imported from the same older project as the header and tweaked to match this site.

At that point, the site looked complete but felt like something was missing. After checking the Vinnovate website, I realised I needed a form and a live news feed. I had no idea how to implement either. Since I personally use Google News a lot, I wanted to integrate that somehow. That’s when I learned about RSS feeds and using RSS-to-JSON services to fetch live headlines. This section exposed me to external data sources, asynchronous JS, and dynamic content.

The final section was the form. I initially planned to follow a YouTube tutorial, but none matched the UI I had in mind. So I designed a rough prototype first and then used AI to help convert it into code. The first result wasn’t great visually, but the structure was usable. After some fine-tuning, it became close to what I wanted, even though I still feel the colour palette could be improved.

For the form submission, I added a simple alert event — not very useful, but it’s the extent of what I currently know in JavaScript. After that, the main homepage was mostly done, so I moved on to gallery.html. That page uses basic Flexbox and image rules to create a working gallery. I downloaded around 25 images, converted them to PNGs, and manually integrated them.

Since I had recently learned about the .toggle() method in JavaScript, I decided to implement a basic dark/light mode toggle. It only switches background and text colours, but it felt nice to apply something I had just learned.

Overall, this site doesn’t use flashy animations or advanced effects — mostly because I don’t know how to do those yet. I also won’t claim that I didn’t use AI. But I do understand how most of this project works, and wherever AI was used, I made sure to ask why things worked the way they did. If anything, AI helped me learn faster by forcing me to ask better questions.

As a comparison, I’ve also linked a vibe-coded portfolio below — built with full freedom and AI assistance:
# https://viratkohli-portfolio.vercel.app/
just in case the task was more about seeing how polished or visually impressive a site could be when given access to everything. I was also aware that many students might submit vibe-coded portfolios, so I wanted to cover that angle as well.

used ai to refine content in this readme 
