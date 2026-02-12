CREATE TYPE "public"."verification_token_type" AS ENUM('email_verification', 'password_reset');--> statement-breakpoint
CREATE TABLE "verification_tokens" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"token" varchar(255) NOT NULL,
	"type" "verification_token_type" NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "verification_tokens" ADD CONSTRAINT "verification_tokens_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_verification_tokens_user_id" ON "verification_tokens" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "idx_verification_tokens_token" ON "verification_tokens" USING btree ("token");