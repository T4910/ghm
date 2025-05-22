"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AlertTriangle, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Generate 50 mock questions with 5 options each
const generateMockQuestions = () => {
  const questions = [];
  const topics = [
    "Organization History",
    "Mission and Values",
    "Structure and Leadership",
    "Activities and Events",
    "Membership Benefits",
    "Technical Knowledge",
    "Communication Skills",
    "Leadership Principles",
    "Team Collaboration",
    "Problem Solving",
  ];

  for (let i = 1; i <= 50; i++) {
    const topicIndex = Math.floor(i / 5) % topics.length;
    questions.push({
      id: i,
      question: `Question ${i}: ${topics[topicIndex]} - ${getQuestionText(
        i,
        topicIndex
      )}`,
      options: [
        { value: "A", label: `Option A for question ${i}` },
        { value: "B", label: `Option B for question ${i}` },
        { value: "C", label: `Option C for question ${i}` },
        { value: "D", label: `Option D for question ${i}` },
        { value: "E", label: `Option E for question ${i}` },
      ],
      correctAnswer: String.fromCharCode(65 + Math.floor(Math.random() * 5)), // A, B, C, D, or E
    });
  }

  return questions;
};

// Helper function to generate more realistic question text
function getQuestionText(questionNumber: number, topicIndex: number) {
  const topics = [
    [
      // Organization History
      "In what year was our organization founded?",
      "Who was the founding president of our organization?",
      "Which event marked the official recognition of our organization?",
      "How many founding members were there initially?",
      "Which department originally housed our organization?",
    ],
    [
      // Mission and Values
      "What is the primary mission of our organization?",
      "Which of these is NOT one of our core values?",
      "How does our organization contribute to the campus community?",
      "Which statement best reflects our organization's vision?",
      "What ethical principle guides our organization's activities?",
    ],
    [
      // Structure and Leadership
      "How many subunits make up our organization?",
      "What is the term length for executive committee members?",
      "Which position is responsible for financial management?",
      "How are subunit leaders selected?",
      "What is the reporting structure for project teams?",
    ],
    [
      // Activities and Events
      "How frequently does the general assembly meet?",
      "Which annual event has the highest attendance?",
      "What type of community service is our organization known for?",
      "Which workshop is mandatory for all new members?",
      "How many major events does our organization host annually?",
    ],
    [
      // Membership Benefits
      "Which of these is NOT a benefit of membership?",
      "What professional development opportunities are offered?",
      "How does membership enhance your academic experience?",
      "What networking opportunities are available to members?",
      "Which industry partners work closely with our organization?",
    ],
    [
      // Technical Knowledge
      "Which programming language is most commonly used in our technical projects?",
      "What is the primary purpose of version control systems?",
      "Which database technology is preferred for our applications?",
      "What is the difference between frontend and backend development?",
      "Which design pattern is most appropriate for event-driven systems?",
    ],
    [
      // Communication Skills
      "What is the most effective way to communicate technical concepts to non-technical audiences?",
      "Which communication channel is appropriate for urgent project updates?",
      "How should you structure a formal presentation to organization stakeholders?",
      "What elements should be included in project documentation?",
      "Which approach is best for resolving communication conflicts within a team?",
    ],
    [
      // Leadership Principles
      "What is the primary responsibility of a team leader?",
      "How should a leader delegate tasks effectively?",
      "What approach should be taken when team members disagree?",
      "Which leadership style is most effective for creative projects?",
      "How should a leader provide constructive feedback?",
    ],
    [
      // Team Collaboration
      "What is the key to successful team collaboration?",
      "How should team members handle missed deadlines?",
      "What is the best approach to integrate new members into existing teams?",
      "Which collaboration tool is most effective for remote teams?",
      "How should credit be attributed in collaborative projects?",
    ],
    [
      // Problem Solving
      "What is the first step in the problem-solving process?",
      "How should you approach a problem with multiple potential solutions?",
      "What technique is useful for breaking down complex problems?",
      "When should you seek help with a technical problem?",
      "How do you evaluate the effectiveness of a solution?",
    ],
  ];

  const index = (questionNumber - 1) % 5;
  return topics[topicIndex][index];
}

export default function ExamPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  const [isTimeoutDialogOpen, setIsTimeoutDialogOpen] = useState(false);

  const questions = generateMockQuestions();

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleTimeout();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleTimeout = () => {
    setIsTimeoutDialogOpen(true);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleAnswerChange = (value: string) => {
    setAnswers({
      ...answers,
      [currentQuestion]: value,
    });
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitExam = () => {
    // Calculate score - in a real app, this would be done on the server
    let correctAnswers = 0;
    Object.keys(answers).forEach((questionIndex) => {
      const index = Number.parseInt(questionIndex);
      if (answers[index] === questions[index].correctAnswer) {
        correctAnswers++;
      }
    });

    const scorePercentage = Math.round(
      (correctAnswers / questions.length) * 100
    );

    // Store score in localStorage (in a real app, this would be sent to a server)
    localStorage.setItem("examScore", scorePercentage.toString());

    // Redirect to dashboard
    router.push("/exam-portal/dashboard");
  };

  const currentQuestionData = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const answeredQuestions = Object.keys(answers).length;

  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold">Organization Entrance Examination</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-amber-600">
              <Clock className="h-4 w-4" />
              <span className="font-medium">{formatTime(timeLeft)}</span>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsSubmitDialogOpen(true)}
            >
              Submit Exam
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <Progress value={progress} className="h-2 mt-2" />
              </div>
              <div className="text-sm text-muted-foreground">
                {answeredQuestions} of {questions.length} answered
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">
                {currentQuestionData.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[currentQuestion] || ""}
                onValueChange={handleAnswerChange}
                className="space-y-3"
              >
                {currentQuestionData.options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted/50"
                  >
                    <RadioGroupItem
                      value={option.value}
                      id={`option-${option.value}`}
                    />
                    <Label
                      htmlFor={`option-${option.value}`}
                      className="flex-1 cursor-pointer"
                    >
                      {option.value}. {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={goToPreviousQuestion}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button
                onClick={goToNextQuestion}
                disabled={currentQuestion === questions.length - 1}
              >
                Next
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-8">
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-10 gap-2">
                  {questions.map((_, index) => (
                    <Button
                      key={index}
                      variant={answers[index] ? "default" : "outline"}
                      className={`h-10 w-10 p-0 ${
                        currentQuestion === index ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setCurrentQuestion(index)}
                    >
                      {index + 1}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Submit Confirmation Dialog */}
      <AlertDialog
        open={isSubmitDialogOpen}
        onOpenChange={setIsSubmitDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Examination</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to submit your examination? You have
              answered {answeredQuestions} out of {questions.length} questions.
              {answeredQuestions < questions.length && (
                <div className="mt-2 flex items-start gap-2 rounded-md border p-3 bg-amber-50 text-amber-800 border-amber-200">
                  <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Warning</p>
                    <p className="text-sm">
                      You have {questions.length - answeredQuestions} unanswered
                      questions. Once submitted, you cannot return to the exam.
                    </p>
                  </div>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Continue Exam</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmitExam}>
              Submit Exam
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Timeout Dialog */}
      <AlertDialog
        open={isTimeoutDialogOpen}
        onOpenChange={setIsTimeoutDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Time{"'"}s Up!</AlertDialogTitle>
            <AlertDialogDescription>
              Your examination time has expired. Your answers will be
              automatically submitted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleSubmitExam}>
              Okay
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
