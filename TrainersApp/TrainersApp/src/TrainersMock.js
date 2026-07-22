import Trainer from './trainer';

const TrainersMock = [
  new Trainer(1, 'Alice Johnson', 'alice.johnson@example.com', '555-0101', 'Frontend', ['React', 'JavaScript', 'CSS']),
  new Trainer(2, 'Brian Lee', 'brian.lee@example.com', '555-0102', 'Backend', ['Java', 'Spring Boot', 'MySQL']),
  new Trainer(3, 'Carla Mendes', 'carla.mendes@example.com', '555-0103', 'DevOps', ['Docker', 'Kubernetes', 'CI/CD']),
  new Trainer(4, 'David Kim', 'david.kim@example.com', '555-0104', 'Full Stack', ['React', 'Node.js', 'MongoDB']),
  new Trainer(5, 'Emma Davis', 'emma.davis@example.com', '555-0105', 'Cloud', ['AWS', 'Azure', 'Terraform'])
];

export default TrainersMock;
