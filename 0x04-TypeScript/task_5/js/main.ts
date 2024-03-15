// Define the interface MajorCredits
interface MajorCredits {
    brand: "Major";
    credits: number;
}

// Define the interface MinorCredits
interface MinorCredits {
    brand: "Minor";
    credits: number;
}

// Create a function sumMajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        brand: "Major",
        credits: subject1.credits + subject2.credits
    };
}

// Create a function sumMinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        brand: "Minor",
        credits: subject1.credits + subject2.credits
    };
}

