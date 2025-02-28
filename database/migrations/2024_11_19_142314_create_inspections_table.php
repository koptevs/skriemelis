<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('inspections', function (Blueprint $table) {
            $table->id();
            $table->string('protocol_number', 32);
            $table->foreignId('lift_id')->index()->constrained('lifts')->nullable();
//            $table->foreign('lift_id')->references('id')->on('lifts')->cascadeOnDelete();
            //            $table->integer('lift_id');

            $table->enum('inspection_type', [
                'Pirmreizējā',
                'Kārtējā',
                'Ārpuskārtas',
                'Atkārtotā',
            ])->nullable();
            $table->enum('inspection_next_type', [
                'Pirmreizējā',
                'Kārtējā',
                'Ārpuskārtas',
                'Atkārtotā',
            ])->nullable();
            $table->integer('expert')->unsigned()->nullable();
            $table->integer('lift_manager')->unsigned()->nullable();


            $table->date('date_start')->nullable();
            $table->date('date_end')->nullable();
            $table->date('date_next')->nullable();
            $table->date('date_next_normal')->nullable();

            $table->string('label', 32)->nullable();
            $table->string('bir_number', 32)->nullable();
            $table->integer('inspection_result')->unsigned()->nullable();

            $table->string('participants')->nullable();


            $table->text('non_compliances_0')->nullable();
            $table->text('non_compliances_1')->nullable();
            $table->text('non_compliances_2')->nullable();
            $table->text('non_compliances_3')->nullable();

            //            $table->text('repeated_check_reason')->nullable();
            $table->text('extra_check_reason')->nullable();
            $table->text('not_checked_forced')->nullable();

            $table->text('notes')->nullable();
            $table->text('notes_for_protokol')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inspections');
    }

};
