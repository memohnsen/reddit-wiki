import { notFound } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface WikiPageProps {
  params: {
    slug: string;
  };
}

// FAQ data as array for accordion
const faqItems = [
  {
    question: "What Equipment Do I Need To Do the Olympic Lifts?",
    answer: `
      <p><strong>Olympic barbell</strong><br />
      The most important single piece of equipment in a lifter's stable is the bar. This is not the same as the common, everyday "Olympic-sized" barbell, which refers to the diameter of the sleeve (50mm), and thus the plates that can be used with it. The primary difference is that the sleeve rotation is decoupled from the center of the bar. This is absolutely essential, as there is a point in both the snatch and the clean where the athlete quickly rotates the bar, and if the sleeve action is separate then the lifter only has to overcome the rotational inertia of the center of the barbell, vastly improving the dynamics of the lift and making the sport as a whole safer. Olympic barbells also use high-quality steel which bends without breaking, a quality often referred to as "springiness" or "bar whip."</p>
      <p><strong>Bushing barbells</strong><br />
      These bars use bushings to couple the sleeves to the center of the bar. Of the two types of Olympic weightlifting barbells, these are cheaper to make and also are considered lower quality. Prices for bushing bars commonly range from $300-$500 USD.</p>
      <p><strong>Bearing barbells</strong><br />
      These bars use needle bearings to couple the sleeves to the center of the bar. Compared to bushings, needle bearings have much less rotational resistance, and tend to be more durable. They are permanently lubricated, and surface deformations have less of an effect on bar spin. Prices for needle bearing bars commonly range from $550-$1,000 USD.</p>
      <p><strong>Men's barbell specifications</strong><br />
      IWF standards for men's barbells are as follows:</p>
      <ul>
        <li>2.2m long</li>
        <li>20kg mass</li>
        <li>50mm sleeve diameter</li>
        <li>28mm grip section diameter</li>
        <li>1.31m grip section width</li>
        <li>910mm grip mark spacing</li>
      </ul>
      <p><strong>Women's barbell specifications</strong><br />
      IWF standards for women's barbells are as follows:</p>
      <ul>
        <li>2.1m long</li>
        <li>15kg mass</li>
        <li>50mm sleeve diameter</li>
        <li>25mm grip section diameter</li>
        <li>1.31m grip section width</li>
        <li>910mm grip mark spacing</li>
        <li>No center knurling</li>
      </ul>
      <p><strong>Youth barbells</strong><br />
      Lighter barbells can be used for lifters aged thirteen and under. Their specifications are the same as for women's barbells, except the sleeves are shorter and the mass is either 10kg or 5kg.</p>
      <p><strong>Selecting your own barbell</strong><br />
      As one of the most expensive single pieces of equipment you may own, this is worth doing your research. Issues such as bearing type, springiness/whip, sharpness/aggressiveness of knurling, manufacturing quality, warranty, and, of course, price must be taken into account. In general, you get what you pay for. Here are some discussions we have had on the subject:</p>
      <ul>
        <li>28 mm Olympic Barbell</li>
        <li>Pendlay Bearing, Burgener Bearing, DHS Competition Bar</li>
      </ul>
      <p>Here are some known, reputable barbell sellers:</p>
      <ul>
        <li>Eleiko</li>
        <li>Uesaka</li>
        <li>DHS</li>
        <li>RogueFitness</li>
        <li>Fringesport</li>
        <li>AmericanBarbell</li>
        <li>WeightliftingHouse</li>
      </ul>
      <p><strong>Bumper plates</strong><br />
      Bumper plates are weights that are safe to drop and that are designed to do less damage to the floor and the bars on which they're placed. While the Olympic lifts can be performed without them, since there are so many cases where it is difficult or even impossible to return the bar to the floor in a controlled manner, these are considered essential for any serious lifter.</p>
      <p>All bumper plates have rubber edges and a sleeve with flat surface area. Economy bumpers tend to be made out of solid rubber, usually with just a metal insert for a sleeve. More expensive bumpers have solid metal cores with rubber on the edges and often coating some or all of the metal core on the face of the plate. Bumpers with metal cores are generally thinner and last much longer than all-rubber plates.</p>
      <p>Bumper plates are always the same diameter, 450mm, so the bar can always be placed the same height off the floor. IWF specifications state that 10kg, 15kg, 20kg, and 25kg bumpers are to be used in competition, and they are to be colored green, yellow, blue, and red, respectively. Special 5kg and 2.5kg bumpers, often called "technique plates," can be purchased; they are usually much more fragile, should be used only in training to allow the lifter to start at the right height, and should not be dropped with the bar if at all possible. Bumper plates in English units are readily available, but are not legal for use in Olympic weightlifting competitions.</p>
      <p>Olympic weightlifting barbell manufacturers virtually always also manufacture bumper plates. Quality is slightly less of an issue than with bars, aside from the life of the plate, as the lifts will not be strongly affected by inferior quality or deteriorating bumpers. They are usually sold in pairs or as part of a complete barbell set.</p>
      <p><strong>Weightlifting shoes</strong><br />
      Weightlifting shoes have a raised heel made out of hard plastic or wood, usually about 0.75", putting the lifter in more comfortable squat positions and allowing more efficient transfer of force through the floor. While not strictly necessary to perform the lifts, this style of shoe is the single most important piece of equipment worn on the athlete's person, and no serious weightlifter will compete without them. Snatches are made particularly easier with these shoes, as the ability to let the knees travel further forward while still keeping the weight spread across the entirety of the feet allows the lifter to get a more upright, and thus stronger and more stable, position when catching the weight overhead. Other exercises commonly performed for which weightlifting shoes are invaluable include high bar back squats, front squats, and overhead squats. More in-depth discussions and reviews can be found here:</p>
      <ul>
        <li>Why Weightlifting Shoes, by Andrew Charniga, Jr.</li>
        <li>WLShoes.com</li>
      </ul>
      <p><strong>Selecting your own shoes</strong><br />
      Shoes tend to fall in the $70-$200 range, depending on quality, brand name, and materials. Recent products have moved away from wooden heels to hard plastic, and it may take more effort to find wood versions if that is your preference. Most are tied with laces and use one or two velcro straps to hold them in place. Higher heels generally allow you to get into better squat positions, up to a point, with a tradeoff of tending to shift your weight more toward your toes, especially during the pull.</p>
      <p>Here are some known, reputable shoe sellers:</p>
      <ul>
        <li>Adidas</li>
        <li>Nike</li>
        <li>REEBOK LEGACY LIFTER MEN'S WEIGHTLIFTING SHOES</li>
        <li>REEBOK LEGACY LIFTER FLEXWEAVE® WOMEN'S SHOES</li>
        <li>Do-win</li>
        <li>Anta's/Romaleo2's</li>
        <li>Asics 727 Blue</li>
        <li>Asics 727 Red</li>
        <li>Velaasa Strake</li>
        <li>VS Athletics</li>
        <li>Wei-Rui</li>
      </ul>
    `
  },
  {
    question: "How Do I Post a Form Check?",
    answer: `
      <p>One of the great things you can get from /r/weightlifting is quality form advice. For a sport that is highly technical but lacking in available coaching, free, informed advice is an extremely valuable commodity. In order to get the best advice and save time for the analyzers (so we can analyze more form checks, of course), please use the guidelines below. Remember to be nice and that there's always the possibility that nobody will have a chance to review your lifts, and that's okay. You'd have to pay a fair amount of money per video to get a coach to do this for you, so no complaints.</p>
      <h4>Video content</h4>
      <ul>
        <li>Taken from an angle of 0­­­°-45° from horizontal toward the front</li>
        <li>Keep feet, bar endcap, and entire lifter body in frame throughout</li>
        <li>Camera should be facing horizontal or slightly down - not placed on the floor looking up (be creative in mounting it if you must)</li>
        <li>No more than two or three representative lifts per video</li>
        <li>Cropped to within a couple seconds of lift start and finish - can be done directly in YouTube (not just link to t=15s, use the crop tool)</li>
        <li>No slow-motion sections - can be done by the viewer in YouTube</li>
      </ul>
      <h4>Text post/background information</h4>
      <p>Posts should include:</p>
      <ul>
        <li>[Form Check] in the title</li>
        <li>Your level of experience</li>
        <li>Recent training/injuries (if informing the technique you're working on or affecting the lift)</li>
        <li>Missing equipment (if applicable, such as shoes, a bar that spins, or anything that might change your technique)</li>
        <li>The weight being used in the lifts (ALWAYS kg)</li>
        <li>A link to your video(s) - YouTube or Coach's Eye preferred (please no images, gifs, or image sequences; Instagram is NOT preferred) A Video is Required!</li>
        <li>Links to your previous related form check threads in descending chronological order</li>
        <li>Please be brief - no walls of text</li>
      </ul>
      <h4>Form check post example</h4>
      <p><strong>Subject: [Form Check] 25kg Snatch</strong></p>
      <p>Hi, 56F here, lifting for five months. Recently I have been working on staying over the bar longer and waiting on the second pull. This video is of my best attempt from my last training session. My shoes aren't actually weightlifting shoes, they're in the mail.</p>
      <ul>
        <li>25kg snatch</li>
        <li>Previous form checks:</li>
        <ul>
          <li>24kg snatch</li>
          <li>23kg snatch</li>
        </ul>
        <li>I had surgery on my right shoulder in the last year. Could be affecting my overhead position.</li>
      </ul>
      <p>Thank you!</p>
      <h4>Rules/tips on evaluating other people's form checks</h4>
      <h5>Rules:</h5>
      <ul>
        <li>Always be constructive with your criticism.</li>
        <li>Please only post if you're adding something to the conversation. Congratulating OP is okay as well, but remember they asked for help, not for "lolz, good lift! You don't need to fix that press-out!"</li>
        <li>Provide evidence for your recommendations. People seeking coaching at all levels are going to hear plenty of differing and often contradicting advice. It is up to you to provide adequate reason for OP, and others, to believe your opinion. Example frames from the form check, specific explanations of what is happening and where, and comparisons with stills/video of other quality lifters are all possible methods. A side benefit is that the process of gathering evidence will teach you more about your own beliefs and make you a better analyzer.</li>
      </ul>
      <h5>Tips:</h5>
      <ul>
        <li>In YouTube, click the Settings button (the gear in the bottom right) and change the speed to 0.5x or 0.25x to watch in slow motion. Follow this link to access this feature.</li>
        <li>In YouTube, use the space bar in quick double-taps to go frame-by-frame.</li>
        <li>In YouTube, use the number keys 0-9 to quickly jump to a useful spot in the video, such as right before the lift-off.</li>
        <li>In Coach's Eye, click and drag the progress bar to smoothly browse between frames. Very handy.</li>
      </ul>
    `
  },
  {
    question: "Competition",
    answer: `
      <p><strong>What are the rules for weightlifting competitions?</strong><br />
      Briefly, any sanctioned weightlifting competition that follows International Weightlifting Federation [IWF] rules will consist of a series of sessions, each divided into two parts - the snatch and the clean and jerk. Each lifter gets three snatches in the first session and three CJs in the second, regardless of success or failure. Attempts are ordered by the weight called for by the athletes, so the lifter asking for the lightest weight goes first. Three referees vote on each lift to determine its success or failure, majority rules. An athlete's total is determined by the sum of their best successful snatch plus their best successful clean and jerk. If any athlete fails all of their snatches or their CJs, they will receive no total (we call this "bombing out").</p>
      <p>More detail can be found in the IWF Technical and Competition Rules & Regulations.</p>
      <p><strong>When should I lift in my first competition?</strong><br />
      As soon as you can!! Many people worry about needing to be competitive with their fellow lifters before entering a meet, but the truth is weightlifting is a deeply personal journey where the only person you are really competing against is yourself. Competition is the most satisfying part of that journey, and is a valuable experience. When you can confidently execute a legal snatch and CJ, it is in your best interests to start searching for competitions.</p>
      <ul>
        <li>Your First Weightlifting Competition<br />Everything you need to know going into your first meet by RawrStrength</li>
        <li>Competition Strategies<br />How To Pick Your Openers and Competition Attempts</li>
        <li>Competition&Performance Articles by CatalystAthletics</li>
      </ul>
      <p><strong>How do I find a competition?</strong><br />
      There are many resources with competition calendars, such as your national governing body [NGB], local governing bodies, or even local clubs. Check your governing body's website or get in touch with nearby coaches and ask around.</p>
      <ul>
        <li>USAW's competition calendar</li>
      </ul>
    `
  },
  {
    question: "How Do I Get Some of That Awesome Flair?",
    answer: `
      <p>Flair is our way of allowing our members to show off their accomplishments and distinguish themselves. If you have posted a total in a competition sanctioned by your IWF-recognized national governing body, you are eligible for flair! It will look like the following:</p>
      <p><strong>YourUsername [country flag] __kg @ [M/F]_kg - Age group</strong></p>
      <p>For example:</p>
      <p>PyrrosDimas [Greek flag] 392.5kg @ M83kg - Senior</p>
      <p>We do allow some special cases, such as protection of anonymity, AMAs, or more notable achievements (e.g.: we'd probably just put "3x Olympic Champion" for Dimas).</p>
      <p>Users with flair are also eligible for our leaderboard.</p>
      <h4>Flair rules</h4>
      <ul>
        <li>All totals must be performed in a sanctioned, Olympic-style weightlifting competition. We are dedicated to the "sport" of weightlifting, which, to us, implies competition. That and it's significantly easier to hit bigger numbers in training.</li>
        <li>If you want special flair, you need only a good reason. The mods will decide if it has merit. If you would like to stay anonymous, you still have to reveal yourself to at least one of the mods, who will take an oath sworn in blood not to divulge your secret.</li>
      </ul>
      <h4>Requesting flair</h4>
      <p>You will need the following:</p>
      <ul>
        <li>Competition results, preferably third-party (olystats.com, USAW's hangastar system, etc.)</li>
        <li>Proof that you are you (such as an image of yourself, see: every AMA ever)</li>
        <li>Then, just message the mods and ask!</li>
      </ul>
    `
  },
  {
    question: "Link Flair",
    answer: `
      <p>Link Flair and filters are ways to categorize posts, to make it easier to search the subreddit. Currently, there are 8 recognized categories. A brief description is included of what a post in that category should contain. To search by a particular category, simply click the appropriate category button on the sidebar, or, in the search box, search: flair:category Name with the appropriate name filled in. For brief visual instruction, see here.</p>
      <ul>
        <li>Form Check - For Form Check posts as described above, please add on this tag.</li>
        <li>Meet Report - For Meet Report posts, following this format please add this tag.</li>
        <li>Programming - For any post related to programming, please add this tag.</li>
        <li>Equipment - For any post related to equipment, such as, but not limited to, barbells, platforms, shoes, belts, wrist wraps, singlets, please add this tag.</li>
        <li>News - This can include videos or just text. For any news related to weightlifting, please add this tag.</li>
        <li>Championship - For any video/text/information related to a particular weightlifting championship, such as Olympic Games or World Weightlifting Championships, please use this tag.</li>
        <li>Elite - For general videos of elite lifters, please use this tag. This is more for training videos, while championship are for competition lifts, or training hall lifts.</li>
        <li>Fluff - For some lighter side posts, please use this tag. Do not be rude or offensive. Posts here are still moderated, and do not show up by default.</li>
      </ul>
    `
  },
  {
    question: "Weekly Chat Thread",
    answer: `
      <p>Every week on a Friday a new thread is stickied. This thread is used for general weightlifting discussion. Please obey all subreddit rules there.</p>
    `
  },
  {
    question: "Self Promotional Saturday",
    answer: `
      <p>Every week, a new stickied post will be created, called: "[Self Promotional Saturday] - {DATE}"</p>
      <p>Inside this thread, you should feel free and welcomed to post links to fundraisers for athletes, new weightlifting products you have, your budding YouTube or Instagram channel, links to your blog; anything and everything that is considered self promotion can freely be posted in this thread. While others can also provide feedback on your channel, product, etc. it is against subreddit rules to be otherwise particularly rude to anyone posting.</p>
      <p>Please obey all other subreddit rules there.</p>
    `
  }
];

// Resources content
const resourcesContent = `
  <h2>What is [Olympic] Weightlifting?</h2>
  <p><strong>A simple explanation for the casual observer</strong></p>
  <p>Weightlifting consists of two lifts, the "snatch" and the "clean and jerk." In the snatch, the lifter takes a wide grip and, in one continuous motion, lifts the bar from the floor to overhead. In the clean, the lifter takes a medium grip and, in one continuous motion, lifts the bar from the floor to the shoulders. The clean is immediately followed by the jerk, in which the lifter drives the bar from the shoulders to overhead in a quick, explosive motion.</p>
  <p>Competitions are divided up into two sessions in which all must compete. In the first session, all lifters get three snatch attempts, which are successively heavier unless an attempt is missed. In the second session, all lifters get three clean and jerk attempts, following the same rules. Each lifter must complete at least one snatch and one clean and jerk to post a total, which is the sum of their best snatch and best clean and jerk. The lifter with the highest total in each weight class wins.</p>
  <ul>
    <li><strong>Snatch example</strong></li>
    <li><strong>Clean and jerk example</strong></li>
  </ul>

  <h2>Learning the lifts</h2>
  <p>It is generally recommended to find a coach who specializes in Olympic Lifting. While you can teach yourself, they are very technical and many people find this difficult. Below are links to a list of country NGB websites, including a link to coach/club finders where we have them. This is a good place to start in your search for a coach.</p>
  <ul>
    <li>United States (USAW) - <a href="#">find a club</a></li>
    <li>Canada (CWFHC) - <a href="#">provincial associations</a></li>
    <li>Australia (AWF) - <a href="#">try weightlifting/find a club</a></li>
    <li>Britain (BWL) - <a href="#">find a club</a></li>
    <li>Denmark/Danmark (DVF) - <a href="#">clubs/klubber</a></li>
    <li>Germany/Deutschland (BVDG) - <a href="#">clubs/vereine</a></li>
    <li>Norway/Norge/Noreg (NVF) - <a href="#">clubs/klubber</a></li>
    <li>New Zealand (OWNZ) - <a href="#">clubs</a></li>
  </ul>
  <p>Your local crossfit box can be a good place to learn the olympic lifts, depending on the instruction. Generally a dedicated olympic lifting coach will be better, however they are not available in all areas. Crossfit boxes vary greatly in the quality of instruction, however are reasonably ubiquitous.</p>
  <p>Your country's federation not here? PM the mods with a link and it will be added shortly.</p>

  <h2>Programming, methods and other resources</h2>
  <p>There are two traditional types of Olympic Lifting programs, named after their countries of origin. Russian lifting systems will work off a reps at a percentage, while Bulgarian systems will work towards a training max. Additionally, there are discussions and rumors about Chinese systems, although these are more recent developments. All three systems have produced quality lifters.</p>
  <p><em>Appropriated from the /r/weightroom FAQ</em></p>

  <h3>Forums</h3>
  <ul>
    <li>WeightliftingForums</li>
    <li>IronMind</li>
  </ul>

  <h3>Weightlifting Portals for WL News</h3>
  <ul>
    <li>WeightliftingHouse</li>
    <li>AllThingsGym</li>
    <li>Barbend.com</li>
  </ul>

  <h3>Youtube Portals for Weightlifting</h3>
  <ul>
    <li>WeightliftingHouse</li>
    <li>AllThingsGym</li>
    <li>HookGrip</li>
    <li>Zack Telander</li>
    <li>Sika Strength</li>
    <li>Shenzhen Weightlifting</li>
    <li>Yazmin Stevens, Malta's First Olympic Weightlifter</li>
    <li>Mindset & Weightlifting By Mona</li>
    <li>Colorplates</li>
    <li>Paramount Barbell Club</li>
  </ul>

  <h3>Weightlifting Portals</h3>
  <ul>
    <li>Catalyst Athletics</li>
    <li>70's Big</li>
    <li>Torokhtiy Video Library</li>
    <li>1Kilo/Wil Fleming</li>
    <li>CaliforniaStrength</li>
    <li>BreakingMuscle</li>
    <li>MashElite</li>
    <li>GarageStrength</li>
    <li>Heavy Metal Barbell</li>
    <li>TakanoWeightlifting</li>
    <li>Glenn Pendlay's Wordpress</li>
    <li>OTP Glenn Pendlay articles</li>
    <li>T-nation Pendlay articles</li>
    <li>Ma Strength Chinese Weightlifting</li>
    <li>Sika Strength</li>
    <li>The Strength Agenda</li>
    <li>LiftBigEatBig Weightlifting</li>
    <li>Sonny Webster</li>
  </ul>

  <h3>How to Warmup For Weightlifting</h3>
  <ul>
    <li>Warming up Weightlifting exercises&competitions</li>
    <li>CatalystAthletics General Warmup article</li>
    <li>CatalystAthletics Complete Weightlifting warmup</li>
    <li>Warmup Library of ParamountBarbell</li>
  </ul>

  <h3>Free Stretching & Mobility resources for Weightlifting</h3>
  <ul>
    <li>Kelly Wild's Lower Body Stretching</li>
    <li>RawrStrength/LiftBigEatBig Front Rack Mobility</li>
    <li>Thoracic Mobility by CatalystAthletics</li>
    <li>Overhead Shoulder Stretches by CatalystAthletics</li>
    <li>Fixing Lower Back Pain&Stiffness by California Strength</li>
    <li>Wrist Mobility for Weightlifting</li>
    <li>Ankle Mobility for Weightlifting</li>
    <li>Catalyst Mobility/Flexibility section</li>
    <li>Rawr Strength Mobility series for WL</li>
    <li>Mobility/Stretching playlist by ParamountBarbell</li>
  </ul>

  <h3>Professional Weightlifting Mobility Courses</h3>
  <ul>
    <li>California Strength's Shoulder Mobility course</li>
    <li>California Strength's Hip Mobility course</li>
  </ul>

  <h3>Exercise Library</h3>
  <ul>
    <li>CatalystAthletics Exercise Library</li>
    <li>California Strength CoachHeroic (Non-WL) Exercise Library</li>
    <li>Paramount Barbell exercise library</li>
    <li>Mona Pretorious/RawrStrength</li>
  </ul>

  <h3>Weightlifting Calculators:</h3>
  <ul>
    <li>Torokhtiy WL PR GENERATOR</li>
    <li>Ma Strength Chinese WL Men's lifts calculator</li>
    <li>Papayat's Exercise Correlation ratios</li>
  </ul>

  <h3>Weighlifting Nutrition</h3>
  <ul>
    <li>California Strength Macronutrient Calculator</li>
  </ul>

  <h3>Free Comprehensive guides to Learning the lifts:</h3>
  <ul>
    <li>JTS/Max Aita multi part series on SnCn&J</li>
    <li>Jeff Witmer/BruteStrength</li>
    <li>Mona Pretorious-RawrStrength/LiftBigEatBig</li>
  </ul>

  <h3>Individualized Learning the lifts:</h3>
  <ul>
    <li>How to Hook Grip</li>
    <li>Hookgrip by LiftBigEatBig/RawrStrength</li>
    <li>How to Use Weightlifting Straps</li>
    <li>How to use straps by LiftBigEatBig/RawrStrength</li>
    <li>Learning the Power Snatch</li>
    <li>Learning the Power Snatch by RawrStrength/LiftBigEatBig</li>
    <li>Learning the Snatch</li>
    <li>Learn to Snatch by IntegratedPerformanceSolutions</li>
    <li>How to Snatch Complete Training guide by RawrStrength/LiftBigEatBig</li>
    <li>Teaching: SNATCH / weightlifting & crossFit by Oleksiy TOROKHTIY</li>
    <li>OLYMPIC WEIGHTLIFTING 101: How To Snatch (Full Guide) by Clarence Kennedy</li>
    <li>Snatch with Glenn Pendlay 1</li>
    <li>Snatch with Glenn Pendlay 2</li>
    <li>Snatch with Glenn Pendlay 3</li>
    <li>Easiest Way to Teach the Snatch with Dave Spitz</li>
    <li>Snatch with Sean Waxman</li>
    <li>Snatch Tips with Glenn Pendlay</li>
  </ul>

  <h3>Power Cleans</h3>
  <ul>
    <li>How To Power Clean by ChineseWeightlifting.com</li>
    <li>Power Clean: The Ultimate Guide With Video by RawrStrength/LiftBigEatBig</li>
  </ul>

  <h3>Hang PowerCleans</h3>
  <ul>
    <li>Hang Power Clean: The Ultimate Guide With Video by RawrStrength/LiftBigEatBig</li>
  </ul>

  <h3>Learning the Clean</h3>
  <ul>
    <li>OLYMPIC WEIGHTLIFTING 101: How To Clean & Jerk (Full Tutorial) Ft. Clarence Kennedy</li>
    <li>Learn to Clean by IntegratedPerformanceSolutions</li>
    <li>POWER POSITION in CLEAN by TOROKHTIY</li>
    <li>Technique: SQUAT CLEAN by TOROKHTIY</li>
    <li>Clean with Glenn Pendlay 1</li>
    <li>Clean with Glenn Pendlay 2</li>
    <li>Clean with Glenn Pendlay 3</li>
    <li>The Clean: Consistent Teaching Progression w/ Dave Spitz</li>
  </ul>

  <h3>Push Press</h3>
  <ul>
    <li>Ultimate guide to Push Press</li>
    <li>Push Press: Ultimate Guide With Video by RawrStrength/LiftBigEatBig</li>
  </ul>

  <h3>The Jerk Dip&Drive</h3>
  <ul>
    <li>Articles on the Jerk Dip&Drive by CatalystAthletics</li>
  </ul>

  <h3>Learning the Jerk</h3>
  <ul>
    <li>How to Jerk - The Cal Strength Jerk Progression, Part 1</li>
    <li>How to Jerk, Part 2 - The Cal Strength Jerk Progression</li>
    <li>OLYMPIC WEIGHTLIFTING 101: How To Clean & Jerk (Full Tutorial) Ft. Clarence Kennedy</li>
    <li>Learn to Push Jerk by IntegratedPerformanceSolutions</li>
    <li>Technique: PUSH JERK by TOROKHTIY</li>
    <li>Technique: SPLIT JERK by TOROKHTIY</li>
    <li>Split Jerk: The Ultimate Guide by RawrStrength/LiftBigEatBig</li>
  </ul>

  <h3>Hypertrophy for Weightlifting</h3>
  <ul>
    <li>California's Strength recommendations for Hypertrophy for WL</li>
    <li>Anthony Pomponio's Hypertrophy for WL paid program</li>
    <li>Mike Grey's Catalyst Predator's cycle</li>
    <li>Bodybuilding Exercises for WL by RawrStrength</li>
  </ul>

  <h3>Competition Tapers:</h3>
  <ul>
    <li>California Strength One Week taper</li>
    <li>California Strength Two Week taper</li>
    <li>1Kilo/Wil Fleming Two Week taper</li>
  </ul>

  <h3>Beginning Programs</h3>
  <ul>
    <li>Glenn Pendlay's Beginner 3 day program</li>
    <li>Beginner/Intermediate LSUS</li>
    <li>Portland SU</li>
    <li>70'sBig 3 day Transitioning to Weightlifting</li>
    <li>70'sBig 4 day Transitioning to Weightlifting</li>
    <li>1Kilo/WilFleming's Weightlifting Program For Beginners</li>
    <li>Wil Fleming's In tha Beginning, There was WL</li>
    <li>2 Cycle Wil Fleming Beginner's Program</li>
    <li>Catalyst Simplest Weightlifting Program</li>
    <li>Catalyst Weightlifting Starter Program</li>
  </ul>

  <h3>Bulgarian Programming</h3>
  <ul>
    <li>PodiumGold/Krychev-Abadjiev Americanized Bulgarian program doc</li>
    <li>PodiumGold/Krychev-Abadjiev Americanized Bulgarian program png</li>
  </ul>

  <h3>Programs Beyond Beginning Weightlifters</h3>
  <ul>
    <li>CatalystAthletics Program library some free, mostly paid</li>
    <li>Waxman's WL WODs</li>
    <li>/u/jacques_chester's template</li>
    <li>jacques' Bulgarian Method</li>
    <li>LSUS 10-5-3</li>
    <li>TheSystem(ForAmateurs)</li>
    <li>Pendlay SuperTotal program</li>
    <li>9 Week Torokhtiy</li>
    <li>BuiltForThis 20 Week Program by Sean Hutchinson</li>
    <li>6 day Wil Fleming "Get Rich or Die Snatchin"</li>
    <li>Help, I can't Snatch or Jerk by Wil Fleming</li>
    <li>Mash Elite Free Programs</li>
    <li>How To Program</li>
    <li>Creating a 12 week program by Wil Fleming</li>
    <li>Free Programs for Master's Weightlifters</li>
    <li>Old-jacked-and-strong 5 day program from Wil Fleming for Masters</li>
    <li>Greg Everett's Sample Master program</li>
    <li>Matt Foreman's (of Catalyst/IronAthletics) Master's Program</li>
  </ul>

  <h3>Weightlifting Squat Programs</h3>
  <ul>
    <li>My Best Squat program by Wil Fleming</li>
  </ul>

  <h3>Online Remote Coaching/Teams reviews/testimonials:</h3>
  <ul>
    <li><a href="https://www.reddit.com/r/weightlifting/comments/ebbpiw/the_good_the_bad_the_ugly_of_onlinecoaching">The Good, The Bad, The Ugly of Online Coaching</a></li>
    <li><a href="https://www.reddit.com/r/weightlifting/comments/mdnab4/index_of_remote_coaching_weightlifting_programming/">Index of Remote Coaching & Weightlifting Programming</a></li>
  </ul>

  <h3>Recommended Paid Resources to learn Weightlifting</h3>
  <ul>
    <li>Olympic-weightlifting-a-complete-guide-for-athletes-coaches by CatalystAthletics</li>
    <li>Catalyst Athletics Learn the Lifts Right complete set</li>
    <li>LIFTRIGHT by Dave Spitz/CalStrength</li>
    <li>Complete Olympic Lifting Handbook by Wil Fleming</li>
    <li>Complete Olympic Weightlifting by Wil Fleming</li>
    <li>Venus Weightlifting: 13 week Learn Chinese Weightlifting Program</li>
    <li>USA Weightlifting Level 1 Course</li>
    <li>USA Weightlifting Level 2 Course</li>
  </ul>

  <h3>Paid Beginning Programs:</h3>
  <ul>
    <li>Weightlifting Beginner Level 1 - CatalystAthletics</li>
    <li>Weightlifting Beginner Level 2 - CatalystAthletics</li>
    <li>Ma Strength Technique Foundation program</li>
    <li>LiftBigEatBig/Mona Pretorius Program for Beginners</li>
    <li>Zack Telander Beginning Program on Patreon</li>
    <li>Sika Strength 12 Week Beginner</li>
    <li>Dozer Weightlifting Learn to Lift Course</li>
    <li>Venus Weightlifting: 13 week Learn Chinese Weightlifting program</li>
  </ul>

  <h3>Paid Programs</h3>
  <ul>
    <li>Weightlifting by Max Aita&WeightliftingHouse</li>
    <li>LiftBigEatBig/Rawr Weightlifting/Mona Pretorious</li>
    <li>Gabriel Sincraian</li>
    <li>Cara Heads Fitness&Performance</li>
    <li>Mash Elite Online Training</li>
    <li>Mattie Rogers</li>
    <li>Aimee Anaya's Ladies only group</li>
    <li>Alex Lee</li>
    <li>DozerWeightlifting/DylanCooper</li>
    <li>WeightliftingFix/ClarenceKennedy</li>
    <li>Heavy Metal Barbell Sean Rigsby & Caine Wilkes</li>
    <li>Beyond Weightlifting Coach Ibanez&Family (Brayan, Emily, Abigail)</li>
    <li>Attitude Nation Weightlifting Jon&Jessica North</li>
    <li>Invictus Weightlifting Jared Enderton</li>
    <li>RUSS WOD Aslan Kubik</li>
    <li>Progress Barbell David Garcia</li>
    <li>Joyfully Weightlifting Natalie Joy from TeamMinnesota</li>
    <li>Paramount Barbell Club Chris Douglas</li>
    <li>IntegratedPerformanceSolutions/Chad Cilli</li>
    <li>Clarence Kennedy Beginners Guide to Weightlifting</li>
    <li>Sika Strength Programs</li>
    <li>Bastrop Barbell</li>
    <li>VenusBarbell by Gaby Qu</li>
    <li>Voodoo Weightlifting by Ed Baker</li>
    <li>USA Weightlifting Start-Up guides for Physical Education, HighSchool, and Collegiate programs</li>
  </ul>

  <p>Keep in mind that there are many schools of thought with the way the lifts should be performed and programmed. Take everything you read with a grain of salt, and do your best to distinguish to good from the bad. Have experience with a style of programming? We'd love to hear a discussion started about it, so we can add it to our FAQ.</p>
`;

// Mock data for wiki content - you would fetch this from Reddit's API
const wikiData = {
  "getting-started": {
    title: "Getting Started",
    content: `
      <h2>Mission Statement</h2>
      <p>At <strong>/r/weightlifting</strong>, we seek to foster a community of weightlifters, coaches, and athletes all pursuing a common goal of being the best that they can be.</p>
      <p>This is not a place where we will hold your hand or give you a medal for each and every PR you make. When you enter this subreddit, you leave mediocrity at the door, and focus on helping yourself and those around you to get better, smarter, and stronger.</p>
      <p>This is a place to foster intelligent discussion of the sport and the theory surrounding the sport with individuals of varying opinion. So long as your thoughts and opinions are well planned and coherent, you are welcome here.</p>
    `,
  },
  "rules": {
    title: "Community Rules",
    content: `
      <h2>Unacceptable content</h2>
      <ul>
        <li><strong>Unresearched questions</strong> – When you post a question to the forum, you are asking members to spend their time reading, considering, and answering your question. It is presumptuous to assume we should do the work for you. Chances are good your question has been answered before on this very forum. Good resources are this FAQ, the search bar on the sidebar, and Google.</li>
        <li><strong>Social questions/chatter/memes/jokes</strong> – This is not Facebook or a social club, it is a forum for people to learn.</li>
        <li><strong>Your mediocre achievements</strong> – We want all of you to succeed, we just don't want to read everybody's posts about "today I hit a 2kg snatch PR!" This is no longer a tiny community, and there is no room for it. This includes "dear diary..." type posts. There is a thread for such posts that is stickied.</li>
        <li><strong>DAE [anything]</strong> – This is not a significant discussion topic. Unless it's really unique and you have a great explanation for why it should be done, it's not appropriate.</li>
        <li><strong>Links to your website</strong> – /r/weightlifting is not your free advertising platform. If you have a topic on your blog that you think is worthy of a post, put the information in a post, and please do not link back to your blog. If it's worthy of discussion, it'll get discussed. If your only reason to post was to get people to see your information and/or draw traffic to your website, then you should not post it. These will be removed with prejudice.</li>
        <li><strong>Injury diagnosis questions</strong> – We are not doctors, and you're more likely going to get bad advice that could worsen your situation than you are to get good advice. Go see a doctor/orthopedist/physical therapist.</li>
        <li><strong>Walls of text</strong> – It's understood that some things require a lot of words, but more often than not much less would suffice. The longer your post is the fewer people will read it. If you were willing to spend the time to write the wall of text, be willing to edit it down so your average ADHD internet denizen won't scream "NOPE!" and hit the back button.</li>
        <li><strong>From the /r/weightroom FAQ:</strong> Before you click submit, think "will anyone here actually give a shit about this?" and let common sense be your guiding light.</li>
      </ul>
      <p>Violating these rules will not result in a ban. Your post will be removed, sometimes after a warning period of no more than 24 hours. Consistent rulebreakers may be given a temporary or permanent ban from the subreddit. We wish to foster intelligent discussion, and bans will not be handed down without just cause. If you have an issue with your ban, you are free to message the moderators to resolve your problem.</p>
      <h2>Acceptable content</h2>
      <ul>
        <li><strong>Form checks</strong> – Generally acceptable, but keep your submissions limited, as this is asking for a fair amount of effort from other users. Because of the size of this subreddit, the more people that ask for form checks, the lower the quality and quantity of responses will be. Do your own research and see what the FAQ has to say about common problems and what advice has been given for other people.</li>
        <li><strong>Exercise/training/programming/equipment/competition questions</strong> – As long as you have done your research first, these are appropriate. Please do not post topics like, "How do I snatch?"</li>
        <li><strong>Video/gifs of elite lifters</strong> – We like to see how the best in the world do. If the video is not new, check to see if it has been posted before.</li>
        <li><strong>Meet reports</strong> – This is acceptable for now. We want to know how our members/comrades are doing. Please follow the meet report guidelines.</li>
        <li><strong>Important news</strong> – If we need to know, let us know. Acceptable posts are news that is of interest to a large number of members.</li>
      </ul>
      <p>If you're not sure if it fits, reread the mission statement.</p>
      <h2>General rules of conduct</h2>
      <ul>
        <li>Not all opinions are equal. Just because you are capable of independent thought does not mean that you are right. You are entitled to share and discuss your opinion in a respectful manner, but you must do so while upholding respect for others opinions. If you are going to talk like an idiot, and discount other's opinions, get out.</li>
        <li>Bans will primarily be given out to stop spammers. They will also be given out to participants who break subrules repeatedly or intentionally in malice.</li>
        <li>Every member can have their voice heard by the moderating staff of /r/weightlifting. Unless your issue merits a post for others to weigh in on, just send a message to the moderators.</li>
      </ul>
      <h2>AMA rules of conduct</h2>
      <ul>
        <li>Asking questions in an AMA is a privilege, not a right.</li>
        <li>Show the poster some respect. If you have a question, ask it. If they don't want to answer it, that is their choice, respect it.</li>
        <li>Trolling people can be funny...just not in an AMA. Take it elsewhere.</li>
        <li>Mods will remove any questions we find to be unacceptable. (We generally defer to the poster on what they deem acceptable).</li>
        <li>Make the /r/weightlifting look good and more people will do AMAs, make it look bad and we will ban you so more people will do AMAs.</li>
      </ul>
    `,
  },
  "faq": {
    title: "Frequently Asked Questions",
    content: faqItems,
  },
  "resources": {
    title: "Resources",
    content: resourcesContent,
  },
};

function addBreaksToHtml(html: string): string {
  // Add <br> after every heading and paragraph
  return html
    .replace(/(<\/(h[1-6]|p)>)/g, '$1<br>')
    .replace(/(<\/ul>)/g, '$1<br>')
    .replace(/(<\/ol>)/g, '$1<br>');
}

export default function WikiPage({ params }: WikiPageProps) {
  const { slug } = params;
  const pageData = wikiData[slug as keyof typeof wikiData];
  
  if (!pageData) {
    notFound();
  }

  // Special rendering for FAQ page
  if (slug === "faq") {
    return (
      <div className="py-8 px-2 md:px-8">
        <div className="w-full rounded-xl border bg-background shadow-lg p-4 md:p-8">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-center">{pageData.title}</h1>
          <Accordion type="multiple" className="w-full">
            {Array.isArray(pageData.content) && pageData.content.map((item, idx) => (
              <AccordionItem value={item.question} key={item.question}>
                <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-stone dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: addBreaksToHtml(item.answer) }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    );
  }

  // Only call addBreaksToHtml if content is a string
  const htmlContent = typeof pageData.content === 'string' ? addBreaksToHtml(pageData.content) : '';

  return (
    <div className="py-8 px-2 md:px-8">
      <div className="w-full rounded-xl border bg-background shadow-lg p-4 md:p-8">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-center">{pageData.title}</h1>
        <div
          className="prose prose-stone dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
} 