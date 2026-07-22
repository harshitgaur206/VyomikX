export const site = {
  name: "VyomikX",
  tagline: "Learn. Build. Innovate.",
  subtitle:
    "A student-led robotics and innovation team at ZHCET, AMU. We help students turn curiosity into real machines — sharing every skill, tool, and idea so anyone can build with technology.",
  email: "vyomikx.team@gmail.com",
  phone: "+91 90000 00000",
  location: "ZHCET, Aligarh Muslim University, Aligarh, India",
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
  stats: [
    { value: "11", label: "Projects Built" },
    { value: "7", label: "Core Members" },
    { value: "ZHCET", label: "AMU, Aligarh" },
    { value: "2024", label: "Founded" },
  ],
}

export type NavLink = { label: string; href: string }

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Future Vision", href: "/future" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
]

export type ProjectSpec = { label: string; value: string }
export type Project = {
  slug: string
  title: string
  category: string
  year: string
  status: "Completed" | "In Progress" | "Prototype"
  summary: string
  image: string
  overview: string
  highlights: string[]
  challenge: string
  outcome: string
  specs: ProjectSpec[]
  tech: string[]
  gallery: { src: string; caption: string }[]
}

export const projects: Project[] = [
  {
    slug: "spider-robot",
    title: "Spider Robot",
    category: "Legged Robotics",
    year: "2024",
    status: "Completed",
    summary:
      "A hexapod-style walking robot with articulated legs that crawls, turns, and adapts its gait over uneven ground.",
    image: "/projects/spider-robot.png",
    overview:
      "Our spider robot uses multiple servo-driven legs coordinated by an inverse-kinematics gait engine. Each leg has several degrees of freedom, letting the robot walk, strafe, and rotate in place. It is a favourite build for teaching students about coordinated multi-actuator control.",
    highlights: [
      "Multi-legged gait with coordinated servo control",
      "Walks, turns, and strafes in any direction",
      "Wireless control from a custom remote",
      "Fully 3D-printed, student-designed chassis",
    ],
    challenge:
      "Synchronising many servos into a smooth, stable gait without the robot toppling took careful timing and leg-sequence tuning.",
    outcome:
      "The finished spider walks reliably across flat and mildly uneven surfaces and is a crowd favourite at demos.",
    specs: [
      { label: "Controller", value: "Arduino Mega" },
      { label: "Actuators", value: "12x SG90 Servos" },
      { label: "Legs", value: "6 Articulated" },
      { label: "Control", value: "Bluetooth Remote" },
      { label: "Body", value: "3D Printed" },
      { label: "Power", value: "2S LiPo" },
    ],
    tech: ["Arduino", "Servo Control", "Inverse Kinematics", "3D Printing"],
    gallery: [{ src: "/projects/spider-robot.png", caption: "Hexapod spider robot mid-stride" }],
  },
  {
    slug: "robosoccer",
    title: "RoboSoccer Bot",
    category: "Competitive Robotics",
    year: "2024",
    status: "Completed",
    summary:
      "A fast, agile wireless robot built for robot-soccer matches — designed to push, dribble, and score.",
    image: "/projects/robosoccer.png",
    overview:
      "Built for inter-college robo-soccer competitions, this bot pairs a low, aggressive chassis with high-torque geared motors and responsive wireless control. The drivetrain is tuned for quick acceleration and tight turning so it can out-manoeuvre opponents on the field.",
    highlights: [
      "High-torque geared drive for quick bursts",
      "Low centre of gravity for stability in tackles",
      "Sub-100ms wireless response",
      "Reinforced front scoop for ball control",
    ],
    challenge:
      "Balancing speed against control meant iterating on wheel choice, weight distribution, and motor gearing.",
    outcome:
      "Competed in campus robo-soccer events and held its own against heavier, more expensive builds.",
    specs: [
      { label: "Controller", value: "Arduino Uno" },
      { label: "Drive", value: "4x Geared DC Motors" },
      { label: "Driver", value: "L298N x2" },
      { label: "Control", value: "2.4GHz Wireless" },
      { label: "Chassis", value: "Aluminium" },
      { label: "Battery", value: "3S LiPo" },
    ],
    tech: ["Arduino", "Motor Control", "Wireless", "Mechanical Design"],
    gallery: [{ src: "/projects/robosoccer.png", caption: "RoboSoccer bot ready for a match" }],
  },
  {
    slug: "rc-car",
    title: "RC Car",
    category: "RC & Mechatronics",
    year: "2024",
    status: "Completed",
    summary:
      "A custom remote-controlled car built from the ground up — chassis, drivetrain, steering, and radio link.",
    image: "/projects/rc-car.png",
    overview:
      "This ground-up RC car taught our newer members the fundamentals of drivetrains, servo steering, and radio control. Members designed the chassis, mounted the motor and steering servo, and tuned the throttle response for smooth, controllable driving.",
    highlights: [
      "Servo-based Ackermann steering",
      "Brushed motor with speed control",
      "Long-range 2.4GHz radio link",
      "Modular chassis for easy upgrades",
    ],
    challenge:
      "Getting responsive yet controllable steering and throttle required tuning the ESC and servo endpoints.",
    outcome:
      "A reliable platform that has since become a testbed for autonomous-driving experiments.",
    specs: [
      { label: "Motor", value: "550 Brushed" },
      { label: "Steering", value: "Servo Ackermann" },
      { label: "Radio", value: "2.4GHz 3-Ch" },
      { label: "ESC", value: "60A Brushed" },
      { label: "Chassis", value: "Custom" },
      { label: "Battery", value: "2S LiPo" },
    ],
    tech: ["RC Systems", "ESC Tuning", "Mechanical Design", "Electronics"],
    gallery: [{ src: "/projects/rc-car.png", caption: "Custom-built RC car" }],
  },
  {
    slug: "rc-plane",
    title: "RC Plane",
    category: "Aerial Robotics",
    year: "2024",
    status: "Completed",
    summary:
      "A hand-built fixed-wing RC aircraft designed, balanced, and flown by the team.",
    image: "/projects/rc-plane.png",
    overview:
      "Our RC plane project covered the full journey of flight: airfoil selection, control-surface design, centre-of-gravity balancing, and maiden-flight trimming. It gave members hands-on experience with aerodynamics and the discipline of flight testing.",
    highlights: [
      "Foam-board airframe with reinforced spar",
      "Three-channel control: throttle, elevator, rudder",
      "Carefully balanced centre of gravity",
      "Successful maiden flight and landing",
    ],
    challenge:
      "Achieving a stable, trimmed flight demanded precise CG placement and control-throw tuning before the first launch.",
    outcome:
      "Completed multiple controlled flights, giving the team its first taste of aeromodelling.",
    specs: [
      { label: "Wingspan", value: "~1 m" },
      { label: "Motor", value: "Brushless 1000KV" },
      { label: "Radio", value: "2.4GHz 6-Ch" },
      { label: "Servos", value: "3x 9g" },
      { label: "Airframe", value: "Foam Board" },
      { label: "Battery", value: "3S LiPo" },
    ],
    tech: ["Aerodynamics", "RC Systems", "Brushless", "Flight Testing"],
    gallery: [{ src: "/projects/rc-plane.png", caption: "Fixed-wing RC plane on the runway" }],
  },
  {
    slug: "water-rocket",
    title: "Water Rocket",
    category: "Aerospace",
    year: "2024",
    status: "Completed",
    summary:
      "A pressurised water-and-air rocket engineered for maximum altitude and a clean recovery.",
    image: "/projects/water-rocket.png",
    overview:
      "A hands-on introduction to thrust, pressure, and aerodynamics, our water rocket uses compressed air to expel water and launch skyward. The team iterated on nozzle size, water-to-air ratio, and fin design to squeeze out extra altitude.",
    highlights: [
      "Optimised water-to-air pressure ratio",
      "Aerodynamic fins for a straight ascent",
      "Reinforced pressure bottle",
      "Reusable launch pad with remote release",
    ],
    challenge:
      "Maximising altitude while keeping the flight straight required tuning fin placement and the launch angle.",
    outcome:
      "Reached impressive heights in test launches and became a staple demo for younger students.",
    specs: [
      { label: "Propellant", value: "Water + Air" },
      { label: "Pressure", value: "~60 psi" },
      { label: "Body", value: "2L PET Bottle" },
      { label: "Fins", value: "3x Custom" },
      { label: "Launch", value: "Remote Release" },
      { label: "Recovery", value: "Ballistic" },
    ],
    tech: ["Aerodynamics", "Pressure Systems", "Prototyping"],
    gallery: [{ src: "/projects/water-rocket.png", caption: "Water rocket on the launch pad" }],
  },
  {
    slug: "robotic-arm",
    title: "Robotic Arm",
    category: "Human-Machine Interface",
    year: "2024",
    status: "Completed",
    summary:
      "A multi-axis robotic arm with a gripper, capable of pick-and-place and programmable motion sequences.",
    image: "/projects/robotic-arm.png",
    overview:
      "This articulated robotic arm has several degrees of freedom driven by servos, ending in a functional gripper. Members programmed smooth motion sequences and experimented with potentiometer and app-based control for intuitive teleoperation.",
    highlights: [
      "Multi-DOF articulation with a gripper",
      "Programmable pick-and-place sequences",
      "Potentiometer and app control modes",
      "Sturdy, adjustable base",
    ],
    challenge:
      "Coordinating multiple servos for smooth, repeatable motion without jitter required careful signal smoothing.",
    outcome:
      "Reliably picks and places small objects and demonstrates the basics of industrial automation.",
    specs: [
      { label: "Controller", value: "Arduino Uno" },
      { label: "Actuators", value: "5x MG996R Servos" },
      { label: "DOF", value: "5 + Gripper" },
      { label: "Reach", value: "~35 cm" },
      { label: "Payload", value: "150 g" },
      { label: "Control", value: "Pot / App" },
    ],
    tech: ["Arduino", "Servo Control", "Automation", "3D Printing"],
    gallery: [{ src: "/projects/robotic-arm.png", caption: "Robotic arm gripping a test object" }],
  },
  {
    slug: "tesla-coil",
    title: "Tesla Coil",
    category: "Electronics",
    year: "2024",
    status: "Completed",
    summary:
      "A slayer-exciter Tesla coil that produces visible high-voltage arcs and wirelessly lights bulbs.",
    image: "/projects/tesla-coil.png",
    overview:
      "A deep dive into high-voltage electronics and resonance, our Tesla coil steps a low DC input up to tens of kilovolts, producing crackling arcs and wirelessly powering nearby fluorescent tubes. It is one of our most memorable public demonstrations of electromagnetism.",
    highlights: [
      "Resonant high-voltage step-up circuit",
      "Wireless lighting of fluorescent tubes",
      "Hand-wound secondary coil",
      "Built-in safety cut-off",
    ],
    challenge:
      "Winding a clean secondary coil and tuning resonance safely demanded patience and strict safety practice.",
    outcome:
      "Produces reliable arcs and has become a highlight demo for explaining resonance and induction.",
    specs: [
      { label: "Type", value: "Slayer Exciter" },
      { label: "Input", value: "12-24V DC" },
      { label: "Output", value: "Tens of kV" },
      { label: "Transistor", value: "High-Power NPN" },
      { label: "Secondary", value: "Hand-Wound" },
      { label: "Safety", value: "Cut-off Switch" },
    ],
    tech: ["High Voltage", "Resonance", "Electronics", "Coil Winding"],
    gallery: [{ src: "/projects/tesla-coil.png", caption: "Tesla coil arcing during a demo" }],
  },
  {
    slug: "line-follower",
    title: "Line Follower Robot",
    category: "Autonomous Systems",
    year: "2024",
    status: "Completed",
    summary:
      "A high-speed line-following robot using an IR sensor array and PID control to track complex paths.",
    image: "/projects/line-follower.png",
    overview:
      "The classic entry-point autonomous project. A calibrated IR reflectance array feeds a PID loop that keeps the robot centred on a line through curves and intersections. It is the first build most new members complete.",
    highlights: [
      "Multi-channel IR reflectance array",
      "Tuned PID for smooth cornering",
      "Lightweight, low-CG chassis",
      "Runtime sensor calibration",
    ],
    challenge:
      "Maintaining stability at speed while reading noisy sensors on sharp turns required careful PID tuning.",
    outcome:
      "Completes competition-style tracks quickly and reliably, and is our core teaching robot.",
    specs: [
      { label: "Controller", value: "Arduino Nano" },
      { label: "Sensors", value: "5x IR Reflectance" },
      { label: "Drive", value: "2x N20 Motors" },
      { label: "Control", value: "PID" },
      { label: "Weight", value: "~250 g" },
      { label: "Battery", value: "2S LiPo" },
    ],
    tech: ["Arduino", "C++", "PID Control", "Sensors"],
    gallery: [{ src: "/projects/line-follower.png", caption: "Line follower tracking a curved path" }],
  },
  {
    slug: "solar-tracker-robot",
    title: "Solar Sunlight-Following Robot",
    category: "Autonomous Systems",
    year: "2024",
    status: "Completed",
    summary:
      "A solar robot that senses the brightest direction and rotates its panel to track sunlight for maximum charge.",
    image: "/projects/solar-tracker.png",
    overview:
      "This robot uses light-dependent resistors to detect the direction of the strongest light and drives servos to orient its solar panel toward it. It demonstrates closed-loop sensing and the real-world gains of active solar tracking over a fixed panel.",
    highlights: [
      "LDR-based dual-axis light sensing",
      "Servo-driven panel orientation",
      "Measurable charge-efficiency gain",
      "Fully solar-powered operation",
    ],
    challenge:
      "Filtering noisy light readings so the panel tracked smoothly instead of jittering took sensor averaging.",
    outcome:
      "Consistently orients toward the brightest source and clearly out-charges a fixed panel in tests.",
    specs: [
      { label: "Controller", value: "Arduino Uno" },
      { label: "Sensors", value: "4x LDR" },
      { label: "Actuators", value: "2x Servos" },
      { label: "Panel", value: "Mini Solar" },
      { label: "Axes", value: "Dual" },
      { label: "Power", value: "Solar + Battery" },
    ],
    tech: ["Arduino", "Sensors", "Renewable Energy", "Control Systems"],
    gallery: [{ src: "/projects/solar-tracker.png", caption: "Solar tracker orienting toward light" }],
  },
  {
    slug: "obstacle-avoider",
    title: "Object Collision-Avoiding Robot",
    category: "Autonomous Systems",
    year: "2024",
    status: "Completed",
    summary:
      "An autonomous rover that sweeps an ultrasonic sensor to detect obstacles and steer around them.",
    image: "/projects/obstacle-avoider.png",
    overview:
      "A teaching platform for autonomy, this rover sweeps a servo-mounted ultrasonic sensor, measures clearances, and picks the freest heading to avoid collisions. Its clean state machine makes it easy for beginners to read and extend.",
    highlights: [
      "Servo-swept ultrasonic scanning",
      "Clear, beginner-friendly state machine",
      "All-terrain four-wheel drive",
      "Modular, hackable codebase",
    ],
    challenge:
      "Keeping the logic simple for beginners while staying robust meant a clean, well-commented control loop.",
    outcome:
      "Navigates cluttered spaces without collisions and is a core kit in our intro workshops.",
    specs: [
      { label: "Controller", value: "Arduino Uno" },
      { label: "Sensor", value: "HC-SR04 on Servo" },
      { label: "Drive", value: "4x DC Gear Motors" },
      { label: "Range", value: "2 - 400 cm" },
      { label: "Chassis", value: "Acrylic 4WD" },
      { label: "Battery", value: "18650 x2" },
    ],
    tech: ["Arduino", "C++", "Ultrasonic", "Robotics"],
    gallery: [{ src: "/projects/obstacle-avoider.png", caption: "Obstacle-avoiding rover scanning ahead" }],
  },
  {
    slug: "self-balancing-robot",
    title: "Self-Balancing Robot",
    category: "Control Systems",
    year: "2024",
    status: "In Progress",
    summary:
      "A two-wheeled robot that stays upright in real time using an IMU and a PID balance controller.",
    image: "/projects/self-balancing.png",
    overview:
      "An inverted-pendulum challenge, this two-wheeled robot reads tilt from an IMU and drives its motors to constantly correct its balance. It is our deepest dive yet into real-time control theory and sensor fusion.",
    highlights: [
      "MPU6050 IMU with complementary filter",
      "Real-time PID balance loop",
      "Recovers from small pushes",
      "Tunable gains for experimentation",
    ],
    challenge:
      "Fusing accelerometer and gyro data into a stable tilt estimate, then tuning the PID for fast recovery, is an ongoing refinement.",
    outcome:
      "The robot balances and self-corrects; work continues on smoother motion and remote drive-while-balancing.",
    specs: [
      { label: "Controller", value: "Arduino Nano" },
      { label: "Sensor", value: "MPU6050 IMU" },
      { label: "Drive", value: "2x NEMA / Geared" },
      { label: "Control", value: "PID + Filter" },
      { label: "Axis", value: "Single (Pitch)" },
      { label: "Battery", value: "2S LiPo" },
    ],
    tech: ["Arduino", "Sensor Fusion", "PID Control", "Control Theory"],
    gallery: [{ src: "/projects/self-balancing.png", caption: "Self-balancing robot holding upright" }],
  },
]

export type TeamMember = {
  name: string
  role: string
  enrolment: string
  bio: string
  image: string
  focus: string[]
}

export const team: TeamMember[] = [
  {
    name: "Nigam Chaudhary",
    role: "Team Coordinator",
    enrolment: "GR1130",
    image: "/team/nigam.png",
    bio: "Coordinates the team's projects and direction, keeping builds on track and mentoring members through every stage.",
    focus: ["Leadership", "Coordination"],
  },
  {
    name: "Himanshu",
    role: "Team Coordinator",
    enrolment: "GQ9697",
    image: "/team/himanshu.png",
    bio: "Drives planning and execution across the team, connecting ideas with the resources and people needed to build them.",
    focus: ["Planning", "Systems"],
  },
  {
    name: "Harshit Gaur",
    role: "Team Member",
    enrolment: "GN7864",
    image: "/team/harshit.png",
    bio: "Hands-on builder working across electronics and embedded control for the team's robotics projects.",
    focus: ["Electronics", "Embedded"],
  },
  {
    name: "Mayank Saini",
    role: "Team Member",
    enrolment: "GQ9538",
    image: "/team/mayank.png",
    bio: "Focuses on mechanical design and fabrication, turning concepts into sturdy, working hardware.",
    focus: ["Mechanical", "Fabrication"],
  },
  {
    name: "Suryansh Jindal",
    role: "Team Member",
    enrolment: "GM7906",
    image: "/team/suryansh.png",
    bio: "Works on programming and control logic, bringing the team's machines to life through code.",
    focus: ["Programming", "Control"],
  },
  {
    name: "Rishabh Chaudhary",
    role: "Team Member",
    enrolment: "GQ9411",
    image: "/team/rishabh.png",
    bio: "Contributes to circuit design and testing, making sure every build is reliable and safe.",
    focus: ["Circuits", "Testing"],
  },
  {
    name: "Aditya Raghav",
    role: "Team Member",
    enrolment: "GQ9599",
    image: "/team/aditya.png",
    bio: "Supports prototyping and assembly, helping ideas move quickly from sketch to working model.",
    focus: ["Prototyping", "Assembly"],
  },
]

export type FutureItem = {
  title: string
  description: string
  timeframe: string
}

export const futureVision: FutureItem[] = [
  {
    title: "A Dedicated Build Space",
    timeframe: "Near Term",
    description:
      "Set up a well-equipped workspace where members can prototype, test, and build together with the right tools on hand.",
  },
  {
    title: "Peer Learning Sessions",
    timeframe: "Near Term",
    description:
      "Run regular hands-on sessions so every interested student can pick up electronics, coding, and fabrication skills.",
  },
  {
    title: "Open Project Documentation",
    timeframe: "Mid Term",
    description:
      "Publish clear guides and code for our builds so any student can learn from and recreate our projects.",
  },
  {
    title: "Compete Beyond Campus",
    timeframe: "Mid Term",
    description:
      "Enter regional and national robotics competitions to test our builds against the best and learn fast.",
  },
  {
    title: "Bigger, Smarter Machines",
    timeframe: "Long Term",
    description:
      "Move toward more advanced, AI-assisted robots that push our skills into perception and autonomy.",
  },
  {
    title: "A Community of Builders",
    timeframe: "Long Term",
    description:
      "Grow a wider circle of student makers who help each other build, so no one has to learn technology alone.",
  },
]

export const values = [
  {
    title: "Learn by Building",
    description:
      "We believe the fastest way to master technology is to build real, working machines — not just read about them.",
  },
  {
    title: "Open Knowledge",
    description:
      "Everything we learn, we share. Documentation, code, and lessons are open so others can build on our work.",
  },
  {
    title: "Help Every Student",
    description:
      "We support any curious student — whatever their background — with the tools, guidance, and encouragement to build.",
  },
  {
    title: "Engineering Rigor",
    description:
      "We hold ourselves to real engineering standards: iterate, test, measure, and improve relentlessly.",
  },
]
