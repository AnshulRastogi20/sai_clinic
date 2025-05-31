
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DoctorCardProps {
  name: string;
  qualifications: string;
  experience: string;
  designation: string;
  timing: string;
  imageUrl: string;
  className?: string;
}

const DoctorCard = ({
  name,
  qualifications,
  experience,
  designation,
  timing,
  imageUrl,
  className,
}: DoctorCardProps) => {
  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-lg", className)}>
      <div className="p-4 sm:p-6 flex flex-col items-center text-center">
        <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-clinic-light-blue">
          <img src={imageUrl} alt={`Dr. ${name}`} className="object-cover" />
        </Avatar>
        
        <div className="mt-4">
          <h3 className="text-xl font-bold text-clinic-dark">Dr. {name}</h3>
          <p className="text-clinic-teal font-medium mt-1">{designation}</p>
        </div>
      </div>

      <CardContent className="bg-clinic-light-blue p-4 sm:p-6">
        <div className="space-y-2">
          <InfoRow label="Qualifications" value={qualifications} />
          <InfoRow label="Experience" value={experience} />
          <InfoRow label="Timing" value={timing} />
        </div>
      </CardContent>
    </Card>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
    <p className="text-gray-600 font-medium sm:col-span-1">{label}:</p>
    <p className="sm:col-span-2">{value}</p>
  </div>
);

export default DoctorCard;
