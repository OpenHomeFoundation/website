The Open Home for Academia

One of the Open Home Foundation’s core values is that the user owns the data that is collected by technology in their home. All the technologies we create are made with this principle in mind and are champions of privacy: we store user data locally and the user is in full control of who has access to this data and what this data is used for.

Home Assistant, and our other technologies like ESPHome, are a perfect match to aid your scientific research. Many researchers have already harnessed Home Assistant’s power to streamline their processes, gain insights, and achieve accurate results.#### Integrate all the things

Home Assistant is an open source smart home platform with a focus on local control and privacy. It is able to connect almost all devices in a home, including sensors, HVAC Systems and solar panels. Among this is also support for smart home standards [Zigbee](https://www.home-assistant.io/integrations/zha), [Z-Wave](https://www.home-assistant.io/integrations/zwave_js) and [Matter](https://www.home-assistant.io/integrations/matter), which gives access to a wide range of affordable devices. The easy extensibility of Home Assistant also allows for the inclusion of devices tailormade for your research, including the ability to consume data via [MQTT](https://www.home-assistant.io/integrations/mqtt).

For each device, Home Assistant keeps a rich history of all the available data, and allows the device to be controlled by users or automations. This allows you to collect the data to do analysis or test advanced algorithms that instantly control systems in response to events or collected data.#### Powerful APIs

Home Assistant offers access to all events, information and control via a real-time [WebSocket API](https://developers.home-assistant.io/docs/api/websocket). You can tap into this to collect the data to do analysis on the rich and granular collected data or create advanced algorithms that control systems in real time in response to events or collected data.

If you rather take a daily snapshot of your collected data, you can easily access the underlying SQLite database and [explore its contents](https://data.home-assistant.io/docs/data).#### Deployability

Home Assistant is free and open source software that runs on almost all platforms. This allows researchers a wide flexibility on how to deploy their research. You can leverage an old computer to run Home Assistant or buy a $35 Raspberry Pi. #### Extensibility

Home Assistant is an extensible platform. It allows each part of the application to be extended or replaced. Researchers are able to add support for specific device APIs, pull in data from other applications or write advanced algorithms that can act on the fly. The user interface is also fully extensible and replaceable. This makes it possible to make powerful dashboards to offer insight and control, but one can also be more creative and host micro-services. #### Voice and AI

The Open Home Foundation builds a privacy focused open source voice assistant. This voice assistant is built completely modular, allowing different speech-to-text, LLMs and text-to-speech engines to be used. As part of our focus on privacy, we have also created our own text-to-speech engine Piper. Researchers developing novel technologies around voice are able to adopt our stack to leverage their technologies to see how it behaves in a real world scenario.## Research done with Open Home technologies

- [The Plegma dataset in Nature.](https://doi.org/10.1038/s41597-024-03208-0) This is a dataset containing domestic appliance-level and aggregate electricity demand with metadata from Greece published by Athanasoulias, S., Guasselli, F., Doulamis, N. _et al._

- [Research into lowering grid demand by reducing thermostat temperatures.](https://arxiv.org/abs/2303.07206)

- [Residential security through the Home Assistant Platform.](https://www.matec-conferences.org/articles/matecconf/abs/2022/01/matecconf_sesam2022_00008/matecconf_sesam2022_00008.html)

- [Optimal Monitoring of Server Rooms with Home Assistant Platform.](https://www.matec-conferences.org/articles/matecconf/abs/2022/20/matecconf_simpro2022_00044/matecconf_simpro2022_00044.html)

* [Smart home automation to aid seniors.](https://www.theseus.fi/handle/10024/508275)

* [Proof-of-concept of a fall detection system based on low-cost IoT devices.](https://thesis.unipd.it/handle/20.500.12608/60586)

* [TatarTTS: An Open-Source Text-to-Speech Synthesis Dataset for the Tatar Language.](https://ieeexplore.ieee.org/abstract/document/10463261) Notably, it is the first large-scale dataset of its kind that is publicly available, aimed at promoting Tatar text-to-speech (TTS) applications in both academic and industrial contexts.

* [ChatGPT for Visually Impaired and Blind.](https://ieeexplore.ieee.org/abstract/document/10463430/authors#authors) Research leverages Piper, our Text-to-Speech system.

* [Icelandic Text-to-Speech powered by Piper.](https://github.com/grammatek/simaromur/tree/master) ([2nd ref](https://repository.clarin.is/repository/xmlui/handle/20.500.12537/287))

\Research about Open Source Home Technologies / Evaluating Home Assistant

- [Setz et al., 2021](https://ieeexplore.ieee.org/document/9652536): A comparison of Open-Source Home Automation Systems

Research done with Home Assistant

- [Akhmetzhanov, B., Gazizuly, O., Nurlan, Z., & Zhakiyev, N. (2022). Integration of a Video Surveillance System Into a Smart Home Using the Home Assistant Platform (p. 5). https://doi.org/10.1109/SIST54437.2022.9945718](https://doi.org/10.1109/SIST54437.2022.9945718): Home Assistant as the central platform to integrate a video surveillance system within a smart home environment

- [Schenkluhn et al. 2023](https://doi.org/10.1145/3544549.3585745); [Schenkluhn et al. 2024](https://doi.org/10.1145/3613904.3642862): Home Assistant as open-source platform to manage and automate the smart home ecosystem, enabling the researchers to automatically detect, position, and manage devices using Augmented Reality (AR)

- [Beruscha et al., 2022](https://dl.acm.org/doi/abs/10.1145/3567445.3567455): Home Assistant as open-source platform for integrating devices and managing Internet of Things (IoT) functionality within a smart home environment, enabling the researchers to explore the capabilities of e-textile interior surfaces that facilitate power supply, communication, and user interaction

- [Wang et al., 2022](https://doi.org/10.1145/3533767.3534365): empirical study on 330 iBugs in Home Assistant to understand their root causes, trigger conditions, impacts, and fixes

- [Cujilema et al. ](https://www.researchgate.net/publication/373789150_Secure_home_automation_system_based_on_ESP-NOW_mesh_network_MQTT_and_Home_Assistant_platform)2023 Development of an algorithm created a secure mesh network with data encryption using ESP-NEW, implemented and evaluated through a MQTT Broker with Home Assistant

- <https://ieeexplore.ieee.org/abstract/document/8991259> Implications of MQTT Connectivity Protocol for IoT based Device Automation using Home Assistant and OpenHAB -> no access to IEEE

- [Gozuoglu, 2024: ](https://sigma.yildiz.edu.tr/storage/upload/pdfs/1698130370-en.pdf)Home Assistant used as a Local Home Automation Server (LHAS) to learn energy consumption behaviour of users for future Smart Grids

- [Șuvar et al., 2022](https://www.matec-conferences.org/articles/matecconf/pdf/2022/20/matecconf_simpro2022_00044.pdf): server room monitoring system at a corporate headquarter

- [Debauche et al., 2020](https://ieeexplore.ieee.org/document/9199640): Home Assistant / ESPHome to implement a Smart Campus approach (small smart cities focused on learning experiences and living conditions improved by IoT)

Living Labs

- Smart Life Lab: Bosch Corporate Research, Renningen, Germany, Frank Berusch: a lab equipped with smart home devices to conduct user studies around topics connected to home environments, using Home Assistant as a platform for their infrastructure

- University of Siegen, Delong Du: in the process of setting up a lab using Home Assistant for their infrastructure

Research without publications yet

- University of Siegen, Delong Du, PhD Candidate: investigating user interactions with smart home heating systems to develop design solutions that improve sustainability and user comfort

- OFFIS e.V. Research Institute for Informatics  Energyefficient Smart Cities, Jan-Henrik Bruhn, Researcher: using ESPHome to develop energy management systems for districts (associated with <https://www.waermewende-nordwest.de/> )

Not yet started projects that are looking into Home Assistant for potential research topics to investigate

- Graduate Student Projects (e.g. in studies for infrastructure and planning management, electronics and automation)

- PhD Research at ETH Zürich’s Center for Law Economics investigating the European Union’s new Data Act (applicable in September 2025)

\Email from Swiss PhD student

My name is Luka Nenadic and I am a Ph.D. Student at ETH Zurich’s Center for Law & Economics. As one of my research projects, I am trying to develop a research question related to the European Union’s new Data Act, which, in short, “gives individuals and businesses the right to access the data produced through their utilisation of smart objects, machines and devices” (European Commission, 2024). The regulation will become applicable in September 2025.

Against this backdrop, I was thinking that it would be very insightful to talk to the providers of a leading open source home automation tool. Most importantly, it would be really interesting for me to know whether you even expect any meaningful impact from the Data Act and, if yes, where you would expect the biggest changes that a researcher may want to inspect.

Please let me know if you are interested in having a conversation.

Best,

\--

ETH Zurich

**Luka Nenadic**

Ph.D. Student

Center for Law & Economics

Intellectual Property Group (Prof. Bechtold)

IFW E 45.1

Haldeneggsteig 4

8092 Zurich, Switzerland

Phone +41 76 325 20 33

luka.nenadic\@gess.ethz.ch

[www.lawecon.ethz.ch](http://www.lawecon.ethz.ch/)
