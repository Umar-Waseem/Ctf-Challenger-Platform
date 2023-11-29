import EventCard from '../components/eventCard';

export default function HomeArea() {
  return (
    <div class="p-4 sm:ml-64 text-white">
      <div class="p-4 mt-14">
        <div class="flex items-center justify-left h-20">
          <p class="text-3xl text-white">
            Your Stats
          </p>
        </div>
        <div class="flex items-center justify-left h-20">
          <p class="text-3xl text-white">
            Your Past Competitions
          </p>
        </div>
        <EventCard title={"Digital Cyber Pakistan"} organizer={"Ignite Inc"} date={"12-Dec-2023"} position={62} description={"Pakistans National Level Cyber Hackathon"} />
        <EventCard title={"Air University Hackathon"} organizer={"Air Uni"} date={"1-Dec-2023"} position={80} description={"Organzied by Air University Islamabad"} />

      </div>
    </div>
  );
}
