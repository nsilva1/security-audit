import network from '../assets/networkscan.jpeg';
import firewall from '../assets/firewallscan.jpeg';
import port from '../assets/portscan.jpeg';
import outdated from '../assets/outdatedscan.jpeg';

export const operations = [
  {
    id: 1,
    title: 'Network Scan',
    description:
      'A network scan is a technique used to identify and gather information about devices and services on a computer network',
    image: network,
  },
  {
    id: 2,
    title: 'Firewall Scan',
    description:
      "A firewall scan is a process of assessing the security and effectiveness of a firewall. It involves testing the firewall's configuration, rules, and overall performance to identify potential vulnerabilities and weaknesses that attackers could exploit.",
    image: firewall,
  },
  {
    id: 3,
    title: 'Port Scan',
    description:
      'A port scan is a technique used to identify open ports on a network-connected device.',
    image: port,
  },
  {
    id: 4,
    title: 'Outdated Scan',
    description:
      'An outdated package scan is a security assessment that focuses on identifying software packages or libraries that are no longer actively maintained or have known vulnerabilities due to being out of date.',
    image: outdated,
  },
];
