import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MessageSquare } from "lucide-react";
import { Coach } from "./types";

interface CoachSelectorProps {
  coaches: Coach[];
  activeCoach: Coach;
  onCoachChange: (coach: Coach) => void;
}

export const CoachSelector = ({ coaches, activeCoach, onCoachChange }: CoachSelectorProps) => {
  return (
    <div className="mb-8">
      <p className="text-white text-center mb-4 text-lg">Select your Coach</p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className={`w-full h-14 text-lg font-medium ${activeCoach.bgGradient} hover:opacity-90 transition-opacity rounded-2xl border-none text-white`}
          >
            Chat with {activeCoach.name} - Your {activeCoach.title}
            <MessageSquare className="ml-2 h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full min-w-[200px] bg-black/90 backdrop-blur-lg border border-white/10">
          {coaches.map((coach) => (
            <DropdownMenuItem
              key={coach.id}
              className={`text-lg py-3 px-4 focus:bg-white/10 focus:text-white cursor-pointer group ${
                activeCoach.id === coach.id ? 'bg-white/10' : ''
              }`}
              onClick={() => onCoachChange(coach)}
            >
              <div className={`w-full h-full bg-gradient-to-r ${coach.gradient} bg-clip-text text-transparent group-hover:text-white transition-colors`}>
                {coach.name} - {coach.title}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};