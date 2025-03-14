"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AtSign, Send } from "lucide-react";

import { Comment } from "@/types/comments";
import { toast } from "sonner";

interface CommentListProps {
  initialComments: Comment[];
  postId: number;
}

export default function CommentList({
  initialComments,
  postId,
}: CommentListProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !body.trim()) {
      toast.error("Error de validación: Todos los campos son requeridos");
      return;
    }

    setIsSubmitting(true);

    const newComment: Comment = {
      postId,
      id: Date.now(),
      name,
      email,
      body,
    };

    setTimeout(() => {
      setComments([newComment, ...comments]);
      setName("");
      setEmail("");
      setBody("");
      setIsSubmitting(false);

      toast.success("Commentario agregado exitosamente");
    }, 500);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Agrega un commentario</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Angie Perez"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ej. angie.email@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="comment">Commentario</Label>
              <Textarea
                id="comment"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Escribe tu commentario aquí..."
                rows={4}
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Enviando...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Enviar
                </span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardHeader>
                <CardTitle className="text-base">{comment.name}</CardTitle>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <AtSign className="h-3 w-3" />
                  <span>{comment.email}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{comment.body}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
